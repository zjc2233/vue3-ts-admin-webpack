import req from '@/utils/request'
// import { api } from "../../utils/config"
import  { api }  from "@/utils/config"

const authApi = `${api}`

/**
 * 登录接口
 * @returns 
 */
export function login(data: any) {
    return req.request({
        url: `${authApi}/login`,
        method: 'post',
        data,
    })
}