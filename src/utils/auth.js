import Cookies from 'js-cookie'
import { Message, Loading } from 'element-ui'
import OSS from 'ali-oss'

const TokenKey = 'token'
export const REQUEST_CODE = 99999;
export const REQUEST_CODE1 = 200;
export const REQUEST_CODE_10404 = 10404;
export const REQUEST_CODE_10010 = 10010;
export const REQUEST_CODE_10001 = 10001;
export const MEASURE_REQUEST_CODE = 200;
export const REQUEST_CODE2 = 0;
// 密码正则验证
export const pwdFlag =
    /^(?![A-Za-z]+$)(?![A-Z\d]+$)(?![A-Z\W]+$)(?![a-z\d]+$)(?![a-z\W]+$)(?![\d\W]+$)\S{8,20}$/;
// 手机号格式验证
export const phoneFlag = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
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
let messages = null;
export function message({ type = "info", message = "" }) {
    if (messages) {
        messages.close() //关闭
    }
    messages = Message({
        offset: 60,
        type,
        message
    })
}
let loadingInstance = null;
export function loading(type) {
    if (type) {
        loadingInstance = Loading.service({
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
export function getBowerType() {
    var explorer = navigator.userAgent;
    let type = "";
    //ie
    if (explorer.indexOf("MSIE") >= 0) {
        type = "ie";
    }
    //firefox
    else if (explorer.indexOf("Firefox") >= 0) {
        type = "Firefox";
    }
    //Chrome
    else if (explorer.indexOf("Chrome") >= 0) {
        type = "Chrome";
    }
    //Opera
    else if (explorer.indexOf("Opera") >= 0) {
        type = "Opera";
    }
    //Safari
    else if (explorer.indexOf("Safari") >= 0) {
        type = "Safari";
    }
    //Netscape
    else if (explorer.indexOf("Netscape") >= 0) {
        type = 'Netscape';
    }
    return type
}
/**
 *
 * @param {Bold} img 图片流
 * @param {Function} callback 回调
 */
export function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

export function base64ToFile(dataurl, filename = 'file') {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let suffix = mime.split("/")[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], `${filename}.${suffix}`, { type: mime })
}
/**
 *  oss上传图片时转化为buffer
 * @param {bold} img 图片流
 * @returns {OSSBuffer} buffer对象
 */
export function readFileAsBuffer(file) {
    const reader = new FileReader();
    return new Promise((resolve) => {
        reader.readAsDataURL(file);
        reader.onload = function () {
            const base64File = reader.result.replace(
                /^data:\w+\/\w+;base64,/,
                ""
            );
            resolve(new OSS.Buffer(base64File, "base64"));
        };
    });
}
/**
 * 判断对象是否为空对象
 * @param {Object} obj
 * @returns
 */
export function objIsEmpty(obj) {
    if ([undefined, null, ''].includes(obj)) return obj
    return Object.keys(obj).length === 0 && obj.constructor === Object
}
/**
 * 获取值的类型
 */
export function getValueType(val) {
    return Object.prototype.toString.call(val)
}
/**
 *
 * @param {*} target
 * @returns
 */
export function findKey(obj, value) {
    if ([undefined, null, ''].includes(obj)) return obj
    return Object.keys(obj).find(k => obj[k] === value)
}

/**
 * 拷贝数据
 * @param {}
 */
// 定义一个深拷贝函数  接收目标target参数
export function deepClone(target) {
    // 定义一个变量
    let result;
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === 'object') {
        // 如果是一个数组的话
        if (Array.isArray(target)) {
            result = []; // 将result赋值为一个数组，并且执行遍历
            for (let i in target) {
                // 递归克隆数组中的每一项
                result.push(deepClone(target[i]))
            }
            // 判断如果当前的值是null的话；直接赋值为null
        } else if (target === null) {
            result = null;
            // 判断如果当前的值是一个RegExp对象的话，直接赋值
        } else if (target.constructor === RegExp) {
            result = target;
        } else {
            // 否则是普通对象，直接for in循环，递归赋值对象的所有值
            result = {};
            for (let i in target) {
                result[i] = deepClone(target[i]);
            }
        }
        // 如果不是对象的话，就是基本数据类型，那么直接赋值
    } else {
        result = target;
    }
    // 返回最终结果
    return result;
}
/**
 * 创建一个带有过期时间的session
 * @param {String} key 设置localstorage的key
 * @param {String} value 设置localstorage的value
 */
export function setSession(key, value) {
    const curTime = Date.now();
    localStorage.setItem(key, JSON.stringify({ data: value, time: curTime }));
}

// 判断值是否为空
export function isEmpty(type) {
    return [null, undefined, ""].includes(type);
};
/**
 * 函数节流
 * @param {Function} fn 执行函数
 * @param {Number} ms  //倒计时时间
 */
export function debounce(fn, ms = 500) {
    let timeoutId
    return function () {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            fn.apply(this, arguments)
        }, ms)
    }
}
/**
 * 根据key和过期时间获取session
 * @param {String} key 获取localstorage的key
 * @param {Number} exp localstorage 的过期时间
 * return {String} localstorage key 对应的值
 */
export function getSession(key, exp) {
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
export function destroySession(key) {
    localStorage.removeItem(key);
}
/**
 * 获取当前日期
 * return {String} day HHHH-MM-DD
 */
export function nowDay() {
    let date = new Date()
    let year = date.getFullYear()
    let month = (date.getMonth() + 1).toString().padStart(2, '0')
    let day = date.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`

}
/**
 * 返回随机的guid
 * @returns guid
 */
export function getGuid() {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var flag = Math.floor(Math.random() * 10);
        //如果是偶数就设置成为
        if (flag % 2 === 0) {
            //全大写
            var n = Math.floor(flag * 2.4) + 65;
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

export function handleImg({ smallImg, bigImg }) {
    return new Promise((resolve, reject) => {
        let image = new Image()
        image.src = smallImg
        image.onload = function () {
            // if (this.complete === true) {
            resolve(smallImg) // 3.小图可以使用时返回小图地址
            // }
        }
        image.onerror = function () {
            let bigImage = new Image()
            bigImage.src = bigImg
            bigImage.onload = function () {
                if (this.complete === true) {
                    resolve(bigImg) // 4.小图不可以使用，大图可以使用时返回大图地址
                }
            }
            bigImage.onerror = function () {
                if (this.complete === true && !isEmpty(bigImg) && !isEmpty(smallImg)) {
                    reject() // 5.大小图都不可以使用时
                }
            }
        }

    })
}
