import router from '@/router/index'
import { getToken } from '@/utils/auth'
import { ElMessage } from 'element-plus'

// 非登录状态可以直接访问的路由
const whiteList = [
    "/login",
    "/register",
]; 

router.beforeEach((to, from, next) => {
    const hasToken = getToken();
    // 有token时可以直接访问
    if (hasToken) {
        next()
    } else {
        // 无token时根据访问路径重定向到登录页面
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            ElMessage({
                message: '请登录后再次尝试！',
                type: 'error',
            })
            next(`/login`);
        }
    }
})