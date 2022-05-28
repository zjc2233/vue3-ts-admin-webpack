import req from '@/utils/request'
import { api } from "@/utils/config"

const authApi = `${api}`

/**
 * 订单列表
 * @returns 
 */
export const orderList = (data: any) => {
    return req.request({
        url: `${authApi}/order`,
        method: 'post',
        data,
    })
}


/**
 * 通过订单id查询基本信息
 * @returns 
 */
export const informationDetail = (orderId: any) => {
    return req.request({
        url: `${authApi}/order/${orderId}`,
        method: 'get',
    })
}