import axios from 'axios'
import vue from "vue";
import store from '@/store'
import router from '@/router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken, getSession, loading, message, removeToken } from '@/utils/auth'
import { tag } from "@/utils/config"
window.axiosCancel = [];
let pending = [];
let cancelToken = axios.CancelToken;
let removePending = (config) => {
    for (const p in pending) {
        if (pending[p].u === `${config.url}&${config.method}?${JSON.stringify(config.data)}`) { //当当前请求在数组中存在时执行函数体
            pending[p].f("Cancel"); //执行取消操作
            pending.splice(p, 1); //把这条记录从数组中移除
        }
    }
}
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 180000 // request timeout
})

service.interceptors.request.use(
    config => {
        // removePending(config)
        // config.cancelToken = new cancelToken((c) => {
        //     pending.push({ u: `${config.url}&${config.method}?${JSON.stringify(config.data)}`, f: c });
        // });
        if (getToken()) {
            if (config.url.indexOf('check') === -1) {
                NProgress.start()
            }
            config.headers['Authorization'] = getToken()
        } else {
            // token 不存在。
            store.dispatch('vip/hiddenVIPDetail')
            store.dispatch('vip/hiddenVIPRecord')
        }
        if (config.url.indexOf('scan-login') !== -1||config.url.indexOf('scan-contact') !== -1) {
            config.headers['Authorization'] = getSession('codeToken')
        }
        if (config.url.indexOf('/central/likePatient') !== -1) {
            config.cancelToken = new axios.CancelToken(cancel => {
                window.axiosCancel.push({ cancel });
            });
        }
        if (process.env.NODE_ENV === 'development' && tag) {
            config.headers['x-tag'] = tag
        }
        return config
    },
    error => {
        console.log('request', error)
        NProgress.done()
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        // removePending(response.config);
        const res = response.data
        NProgress.done()
        if (response.status === 401 || res.code === 401) {//token过期
            store.dispatch('user/logout').then(() => {
                location.reload(); // 为了重新实例化vue-router对象 避免bug
                message({
                    type: "error",
                    message: res.message || res.msg || 'token已过期，请重新登录',
                })
                removeToken();
                router.push("/login?type=2")
            })
            return Promise.reject(new Error(res.msg || 'Error'))
        }
        /* if (
            response.headers['content-type'].includes('application/octet-stream')
            || response.headers['content-type'].includes('application/vnd.ms-excel')) { //当返回数据流格式 直接放行(导出)
            NProgress.done()
            return response;
        } */
        let codeArr = [0, 99999, 200, 1330, 1200, 10404];
        let currentPath = router.history.current.path;
        if (res instanceof Blob) {//当返回blob格式 直接放行(导出)
            loading(false)
            NProgress.done()
            return response;
        } else if (!codeArr.includes(res.code) && res.resultID !== 1200 && currentPath !== "/userFactory" && currentPath !== "/userDoctor") {
            loading(false)
            message({
                type: "error",
                message: res.message || res.msg || 'Error',
            })
        }
        NProgress.done()
        return res
    },
    error => {
        NProgress.done();
        if (error && error.message === 'Cancel') {
            return {};
        }
        message({
            type: "error",
            message: error || error.message,
        })
        // return Promise.reject(error)
        return {
            code: -987654321,
            data: error
        }
    }
)

export default service;