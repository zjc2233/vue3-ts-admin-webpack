<template>
    <div class="menu">  
        <div class="menu-logo">
            <img src="@/assets/menu-logo.png" />
        </div>
        <ul class="meun-list">
            <router-link
                v-for="(item, index) in menuList"
                :key="index"
                :data-index="index"
                :to="item.path"
            >
                <li
                    class="menu-ist-item cursor_pointer"
                    :class="{ 'menu-list-item-active': getActive(item.path) }"
                >
                    <i :class="item.icon"></i>
                    <span>{{ item.title }}</span>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const menuList = [
    {
        title: "首页",
        path: "/home",
        icon: "el-icon-school",
    },
    {
        title: "隐形正畸",
        path: "/invisibleOrthodontic",
        icon: "el-icon-school",
    },
    {
        title: "义齿加工",
        path: "/dentureTeeth",
        icon: "el-icon-school",
    },
    {
        title: "模型寄送",
        path: "/modelDelivery",
        icon: "el-icon-school",
    },
    {
        title: "暂存箱",
        path: "/stagingBox",
        icon: "el-icon-school",
    },
    {
        title: "品牌列表",
        path: "/brandList",
        icon: "el-icon-school",
    },
    {
        title: "系统设置",
        path: "/setting",
        icon: "el-icon-school",
    },
];
function getActive(path: string) {
    return route.path === path;
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
    }
}
</style>