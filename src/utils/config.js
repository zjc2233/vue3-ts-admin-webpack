function getApiHost(values) {
    let url = '';
    //   values="production"
    let type = {
        development: "http://192.168.80.232:8888",
        production: "https://api.icloudent.com",
        staging: "https://w.icloudent.com",
    }
    url = type[values]
    return url;
}
module.exports = {
    api: getApiHost(process.env.NODE_ENV),
    tag: 'qh', // 优先调用后端谁开的服务（钟阳：'zy', 彭奇：'pq', 乔豪：'qh'）
}
