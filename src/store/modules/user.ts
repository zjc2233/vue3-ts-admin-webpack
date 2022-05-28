import { ActionTree } from 'vuex';
import { ElMessage } from 'element-plus'
import { REQUEST_CODE, setToken } from '@/utils/auth'
import { login, } from '@/api/user/login'


const state: any = {
    stageList: [],
}
const mutations = {
    STATE_CHANGE(state: any, data: any) {
        const arrKey = Object.keys(data);
        const len = arrKey.length;
        for (let i = 0; i < len; i++) {
            state[arrKey[i]] = data[arrKey[i]]
        }
    },
}
const actions: ActionTree<any, any> = {
    // 新增影像资料
    login({ commit }, data) {
        return new Promise((resolve, reject) => {
            login({ ...data }).then((res: any) => {
                if (res.code !== REQUEST_CODE) {
                    reject()
                } else {
                    // ElMessage({
                    //     message: res.message,
                    //     type: 'success',
                    // })
                    setToken(res.data)
                    resolve(data)
                }
            }).catch(error => {
                reject(error)
            })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
