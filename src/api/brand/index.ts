import req from '@/utils/request'
import  { api }  from "@/utils/config"

const authApi = `${api}`

/**
 * 品牌列表
 * @returns 
 */
export function brandList(data: any) {
    return req.request({
        url: `${authApi}/brand/list`,
        method: 'post',
        data,
    })
}
/**
 * 保存品牌信息
 * @returns 
 */
export function brandSave(data: any) {
    return req.request({
        url: `${authApi}/brand/save`,
        method: 'post',
        data,
    })
}
/**
 * 保存品牌信息
 * @returns 
 */
export function brandDelete(brandId: number | string) {
    return req.request({
        url: `${authApi}/brand/${brandId}`,
        method: 'delete',
    })
}
/**
 * 品牌启用/禁用
 * @returns 
 */
export function brandEnable(brandId: number | string) {
    return req.request({
        url: `${authApi}/brand/enable/${brandId}`,
        method: 'put',
    })
}
/**
 * 品牌详情
 * @returns 
 */
export function brandDetail(brandId: number | string) {
    return req.request({
        url: `${authApi}/brand/detail/${brandId}`,
        method: 'get',
    })
}