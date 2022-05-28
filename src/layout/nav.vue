<template>
    <div class="menu">
        <div class="menu-logo">
            <img src="@/assets/menu-logo.png" />
        </div>
        <ul class="meun-list">
            <el-collapse>
                <div v-for="(item, index) in menuList" :key="index" :data-index="index">
                    <el-collapse-item class="bg-dark-900" :name="item.path"
                        v-if="hasChild(item)">
                        <template #title>
                            <Edit class="w-5 ml-28-px" />
                            <span class="pl-20-px text-base">{{ item.meta && item.meta.title }}</span>
                        </template>
                        <router-link v-for="subMenu in item.children" :key="subMenu.path" :to="subMenu.path">
                            <li class="menu-ist-item cursor_pointer"
                                :class="{ 'menu-list-item-active': getActive(subMenu.path) }">
                                <span class="pl-35-px">{{ subMenu.meta && subMenu.meta.title }}</span>
                            </li>
                        </router-link>
                    </el-collapse-item>
                    <router-link v-else :to="item.path">
                        <li class="menu-ist-item cursor_pointer"
                            :class="{ 'menu-list-item-active': getActive(item.path) }">
                            <!-- <i :class="item.meta && item.meta.icon"></i> -->
                            <Edit class="w-5" />
                            <span>{{ item.meta && item.meta.title }}</span>
                        </li>
                    </router-link>
                </div>
            </el-collapse>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { routes } from '@/router/index'
import { RouteRecordRaw } from "vue-router";

const route = useRoute()

// let menuList: Array<RouteRecordRaw>

// 路由中菜单的路由过滤
const menuList = computed(() => {
    let res
    routes.some(item => {
        if (item.path === '/' && item.children) {
            item.children.forEach(innerItem => {
                if (innerItem.children?.length) {
                    innerItem.children = innerItem.children.filter(fiterItem => {
                        return fiterItem.meta && fiterItem.meta.showMenu
                    })
                    if (innerItem.children.length === 0) {
                        delete innerItem.children
                    }
                }
            })
            res = item.children
            return true
        }
    })
    console.log('res', res);

    return res
})

const hasChild = (item: any) => {
    return item.children && item.children.length > 0
}


function getActive(path: string) {
    // return route.path === path || route.path.startsWith(path);
    return route.path === path ;
}
</script>

<style lang='scss' scoped>
.menu {
    color: #f1f1f1;

    .menu-logo {
        width: 100%;
        height: 56px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .meun-list {
        width: 100%;
        height: calc(100% - 56px);
        overflow-y: auto;

        .menu-ist-item {
            width: 100%;
            padding: 18px 26px;
            margin: auto;
            color: #fff;
            display: flex;
            span {
                margin-left: 18px;
            }
        }

        .menu-ist-item:hover {
            background: #242d35;
            border-right: 4px solid $theme-blue-b1;

            i {
                color: $theme-blue-b1;
            }
        }

        .menu-list-item-active {
            background: #242d35;
            border-right: 4px solid $theme-blue-b1;

            i {
                color: $theme-blue-b1;
            }
        }

        ::v-deep .el-collapse-item__header,
        ::v-deep .el-collapse-item__wrap {
            background-color: rgba(15, 15, 15);
            color: #fff;
            border: 0;
        }
        ::v-deep .el-collapse-item__header {
            height: 63px;
        }
    }
}
</style>