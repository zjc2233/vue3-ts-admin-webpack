interface ConfigType {
    development: string,
    production: string,
    staging: string,
}
function getApiHost(values: any) {
    let url = '';
    //   values="production"
    const type: ConfigType = {
        development: "http://192.168.80.80:7979",
        production: "https://api.icloudent.com",
        staging: "https://w.icloudent.com",
    }
    url = type[values]
    return url;
}

export const api = getApiHost(process.env.NODE_ENV)
export const tag = 'qh' // 优先调用后端谁开的服务（钟阳：'zy', 彭奇：'pq', 乔豪：'qh'）

