import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router/index'
import type {
    RequestConfig,
    RequestInterceptors,
    CancelRequestSource,
    AxiosResponse1
} from './types'
import { getToken, REQUEST_CODE } from '@/utils/auth'
import { tag } from '@/utils/config'



// 成功的code
const successCodeList = [
    REQUEST_CODE
]
class Request {
    // axios 实例
    instance: AxiosInstance
    // 拦截器对象
    interceptorsObj?: RequestInterceptors<AxiosResponse>

    /*
    存放取消方法的集合
    * 在创建请求后将取消请求方法 push 到该集合中
    * 封装一个方法，可以取消请求，传入 url: string|string[]  
    * 在请求之前判断同一URL是否存在，如果存在就取消请求
    */
    cancelRequestSourceList?: CancelRequestSource[]
    /*
    存放所有请求URL的集合
    * 请求之前需要将url push到该集合中
    * 请求完毕后将url从集合中删除
    * 添加在发送请求之前完成，删除在响应之后删除
    */
    requestUrlList?: string[]

    constructor(config: RequestConfig) {
        this.requestUrlList = []
        this.cancelRequestSourceList = []
        this.instance = axios.create(config)
        this.interceptorsObj = config.interceptors
        // 拦截器执行顺序 接口请求 -> 实例请求 -> 全局请求 -> 实例响应 -> 全局响应 -> 接口响应
        this.instance.interceptors.request.use(
            (res: AxiosRequestConfig) => res,
            (err: any) => err,
        )

        // 使用实例拦截器
        this.instance.interceptors.request.use(
            this.interceptorsObj?.requestInterceptors,
            this.interceptorsObj?.requestInterceptorsCatch,
        )
        this.instance.interceptors.response.use(
            this.interceptorsObj?.responseInterceptors,
            this.interceptorsObj?.responseInterceptorsCatch,
        )
        // 全局响应拦截器保证最后执行
        this.instance.interceptors.response.use(
            // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
            (res: AxiosResponse) => {
                return res.data
            },
            (err: any) => err,
        )
    }
    /**
     * @description: 获取指定 url 在 cancelRequestSourceList 中的索引
     * @param {string} url
     * @returns {number} 索引位置
     */
    private getSourceIndex(url: string): number {
        return this.cancelRequestSourceList?.findIndex(
            (item: CancelRequestSource) => {
                return Object.keys(item)[0] === url
            },
        ) as number
    }
    /**
     * @description: 删除 requestUrlList 和 cancelRequestSourceList
     * @param {string} url
     * @returns {*}
     */
    private delUrl(url: string) {
        const urlIndex = this.requestUrlList?.findIndex(u => u === url)
        const sourceIndex = this.getSourceIndex(url)
        // 删除url和cancel方法
        urlIndex !== -1 && this.requestUrlList?.splice(urlIndex as number, 1)
        sourceIndex !== -1 &&
            this.cancelRequestSourceList?.splice(sourceIndex as number, 1)
    }
    request<T>(config: RequestConfig<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
            if (config.interceptors?.requestInterceptors) {
                config = config.interceptors.requestInterceptors(config)
            }
            const url = config.url
            // url存在保存取消请求方法和当前请求url
            if (url) {
                this.requestUrlList?.push(url)
                config.cancelToken = new axios.CancelToken(c => {
                    this.cancelRequestSourceList?.push({
                        [url]: c,
                    })
                })
            }
            this.instance
                .request<any, T>(config)
                .then(res => {
                    // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
                    if (config.interceptors?.responseInterceptors) {
                        res = config.interceptors.responseInterceptors(res)
                    }

                    resolve(res)
                })
                .catch((err: any) => {
                    reject(err)
                })
                .finally(() => {
                    url && this.delUrl(url)
                })
        })
    }
    // 取消请求
    cancelRequest(url: string | string[]) {
        if (typeof url === 'string') {
            // 取消单个请求
            const sourceIndex = this.getSourceIndex(url)
            sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][url]()
        } else {
            // 存在多个需要取消请求的地址
            url.forEach(u => {
                const sourceIndex = this.getSourceIndex(u)
                sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][u]()
            })
        }
    }
    // 取消全部请求
    cancelAllRequest() {
        this.cancelRequestSourceList?.forEach(source => {
            const key = Object.keys(source)[0]
            source[key]()
        })
    }
}


const request = new Request({
    // baseURL: import.meta.env.BASE_URL,
    timeout: 1000 * 60 * 5,
    interceptors: {
        // 请求拦截器
        requestInterceptors: config => {
            // 设置Authorization请求头
            if (config.headers) {
                config.headers.Authorization = getToken()
                if (process.env.NODE_ENV === 'development' && tag) {
                    config.headers['x-tag'] = tag
                }
            }
            return config
        },
        // 响应拦截器
        responseInterceptors: (result: AxiosResponse1) => {
            // 全局错误提示            
            if (!successCodeList.includes(result.data.code)) {
                ElMessage({
                    message: result.data.message,
                    type: 'error',
                })
            } 
            return result
        },
        // 响应错误拦截器
        responseInterceptorsCatch: (error) => {
            console.log('error', error);
            if (error.response.status === 403) {
                ElMessage({
                    message: '登录已过期，请重新登录！',
                    type: 'error',
                })
                // 取消其他请求
                request.cancelAllRequest()
                router.push('/login')
            }
        }
    },
})

export default request

export { RequestConfig, RequestInterceptors }