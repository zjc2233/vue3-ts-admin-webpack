import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import layout from "@/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/login/index.vue"),
    },
    {
        path: '/',
        component: layout,
        redirect: '/home',
        children: [{
            path: "/home",
            name: "Home",
            component: Home,
        },
        {
            path: '/brandList',
            name: 'BrandList',
            component: () => import('@/views/brand/brandList.vue')
        }]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
