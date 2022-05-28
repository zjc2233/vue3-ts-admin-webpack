import Cookies from 'js-cookie'
import { ElLoading } from 'element-plus'

const TokenKey = 'token'
export const REQUEST_CODE = '00000';
export const REQUEST_CODE1 = 200;
export const REQUEST_CODE_10404 = 10404;
export const REQUEST_CODE_10010 = 10010;
export const REQUEST_CODE_10001 = 10001;
export const MEASURE_REQUEST_CODE = 200;
export const orderTypeList = ['隐形正畸', '义齿加工'];
export const genderList = ['', '女', '男'];
// 密码正则验证
export const pwdFlag =
    /^(?![A-Za-z]+$)(?![A-Z\d]+$)(?![A-Z\W]+$)(?![a-z\d]+$)(?![a-z\W]+$)(?![\d\W]+$)\S{8,20}$/;
// 手机号格式验证
export const phoneFlag = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
export function getToken() {
    return Cookies.get(TokenKey) || ''
}

export function setToken(token: string) {
    if (process.env.NODE_ENV === "production") {
        return Cookies.set(TokenKey, token, { domain: '.icloudent.com' })
    }
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    if (process.env.NODE_ENV === "production") {
        return Cookies.remove(TokenKey, { domain: '.icloudent.com' })
    }
    return Cookies.remove(TokenKey)
}
let loadingInstance: any = null;
export function loading(type: any) {
    if (type) {
        loadingInstance = ElLoading.service({
            lock: true,
            text: "正在加载中,请稍后...",
            // spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.8)"
        })
    } else {
        if (isEmpty(loadingInstance)) {
            return
        }
        loadingInstance.close()
    }
}
// 获取浏览器类型
// export function getBowerType() {
//     var explorer = navigator.userAgent;
//     let type = "";
//     //ie
//     if (explorer.indexOf("MSIE") >= 0) {
//         type = "ie";
//     }
//     //firefox
//     else if (explorer.indexOf("Firefox") >= 0) {
//         type = "Firefox";
//     }
//     //Chrome
//     else if (explorer.indexOf("Chrome") >= 0) {
//         type = "Chrome";
//     }
//     //Opera
//     else if (explorer.indexOf("Opera") >= 0) {
//         type = "Opera";
//     }
//     //Safari
//     else if (explorer.indexOf("Safari") >= 0) {
//         type = "Safari";
//     }
//     //Netscape
//     else if (explorer.indexOf("Netscape") >= 0) {
//         type = 'Netscape';
//     }
//     return type
// }
/**
 *
 * @param {Bold} img 图片流
 * @param {Function} callback 回调
 */
export function getBase64(img: Blob, callback: any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

// export function base64ToFile(dataurl, filename = 'file') {
//     let arr = dataurl.split(',');
//     let mime = arr[0].match(/:(.*?);/)[1];
//     let suffix = mime.split("/")[1];
//     let bstr = atob(arr[1]);
//     let n = bstr.length;
//     let u8arr = new Uint8Array(n);
//     while (n--) {
//         u8arr[n] = bstr.charCodeAt(n);
//     }
//     return new File([u8arr], `${filename}.${suffix}`, { type: mime })
// }
/**
 *  oss上传图片时转化为buffer
 * @param {bold} img 图片流
 * @returns {OSSBuffer} buffer对象
 */
// export function readFileAsBuffer(file) {
//     const reader = new FileReader();
//     return new Promise((resolve) => {
//         reader.readAsDataURL(file);
//         reader.onload = function () {
//             const base64File = reader.result.replace(
//                 /^data:\w+\/\w+;base64,/,
//                 ""
//             );
//             resolve(new OSS.Buffer(base64File, "base64"));
//         };
//     });
// }
/**
 * 判断对象是否为空对象
 * @param {Object} obj
 * @returns
 */
export function objIsEmpty(obj: any) {
    if ([undefined, null, ''].includes(obj)) return obj
    return Object.keys(obj).length === 0 && obj.constructor === Object
}
/**
 * 获取值的类型
 */
export function getValueType(val: any) {
    return Object.prototype.toString.call(val)
}
/**
 *
 * @param {*} target
 * @returns
 */
export function findKey(obj: any, value: string) {
    if ([undefined, null, ''].includes(obj)) return obj
    return Object.keys(obj).find(k => obj[k] === value)
}
/**
 * 创建一个带有过期时间的session
 * @param {String} key 设置localstorage的key
 * @param {String} value 设置localstorage的value
 */
export function setSession(key: string, value: any) {
    const curTime = Date.now();
    localStorage.setItem(key, JSON.stringify({ data: value, time: curTime }));
}

// 判断值是否为空
export function isEmpty(type: any) {
    return [null, undefined, ""].includes(type);
};
/**
 * 根据key和过期时间获取session
 * @param {String} key 获取localstorage的key
 * @param {Number} exp localstorage 的过期时间
 * return {String} localstorage key 对应的值
 */
export function getSession(key: string, exp: number) {
    const data = localStorage.getItem(key);
    if (!data) {
        return '';
    }
    const dataObj = JSON.parse(data);
    if (!isEmpty(exp) && new Date().getTime() - dataObj.time > exp) {
        return '';
    }
    return dataObj.data;
}

/**
* 删除一个session
* @param {String} key
*/
export function destroySession(key: string) {
    localStorage.removeItem(key);
}
/**
 * 获取当前日期
 * return {String} day HHHH-MM-DD
 */
export function nowDay() {
    const date = new Date()
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
}

/**
 * 返回随机的guid
 * @returns guid
 */
export function getGuid() {
    let guid: string | number = "";
    for (let i = 1; i <= 32; i++) {
        const flag = Math.floor(Math.random() * 10);
        //如果是偶数就设置成为
        if (flag % 2 === 0) {
            //全大写
            let n: string | number = Math.floor(flag * 2.4) + 65;
            //全小写
            // var n = Math.floor(flag*2.4) + 97;
            n = String.fromCharCode(n);
            guid += n;
        } else {
            guid += flag;
        }
        // if((i==8)||(i==12)||(i==16)||(i==20))
        //   guid += "-";
    }
    return guid;
}

interface handleImgInterface {
    smallImg: string,
    bigImg: string,
}

export function handleImg({ smallImg, bigImg }: handleImgInterface) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = smallImg
        image.onload = function () {
            // if (this.complete === true) {
            resolve(smallImg) // 3.小图可以使用时返回小图地址
            // }
        }
        image.onerror = function () {
            const bigImage = new Image()
            bigImage.src = bigImg
            bigImage.onload = function () {
                // if (this.complete === true) {
                resolve(bigImg) // 4.小图不可以使用，大图可以使用时返回大图地址
                // }
            }
            bigImage.onerror = function () {
                if (this.complete === true && !isEmpty(bigImg) && !isEmpty(smallImg)) {
                    reject() // 5.大小图都不可以使用时
                }
            }
        }

    })
}
