import { createRouter, createWebHashHistory, RouteRecordRaw, RouterView } from "vue-router";
import Home from "@/views/Home.vue";
import layout from "@/layout/index.vue";
/**
 * showMenu 默认 false， false时不在菜单栏显示
 * title 菜单标题
 * icon 菜单icon图标
 */

export const routes: Array<RouteRecordRaw> = [
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/login/index.vue"),
    },
    {
        path: '/',
        component: layout,
        redirect: '/home',
        children: [{
            path: "/home",
            name: "home",
            component: Home,
            meta: { showMenu: true, title: '首页', icon: "el-icon-school", },
        },
        {
            path: '/invisibleOrthodontic',
            name: 'invisible-orthodontic',
            component: RouterView,
            meta: { showMenu: true, title: '隐形正畸', icon: "el-icon-school", },
            children: [
                {
                    path: '',
                    name: 'invisibleOrthodonticList',
                    component: () => import('@/views/invisibleOrthodontic/invisibleOrthodontic.vue'),
                },
                {
                    path: '/invisibleDetail',
                    name: 'invisible-detail',
                    component: () => import('@/views/invisibleOrthodontic/detail/detail.vue'),
                },
            ]
        },
        {
            path: '/financial',
            name: 'financial',
            component: RouterView,
            meta: { showMenu: true, title: '财务管理', icon: "el-icon-school", },
            children: [
                {
                    path: '/financial',
                    name: 'revenue',
                    component: () => import('@/views/financial/revenue.vue'),
                    meta: { showMenu: true, title: '营收概况', icon: "el-icon-school", },
                },
                {
                    path: '/financialList',
                    name: 'financial-list',
                    component: () => import('@/views/financial/financialList.vue'),
                    meta: { showMenu: true, title: '财务明细', icon: "el-icon-school", },
                },
            ]
        },]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
