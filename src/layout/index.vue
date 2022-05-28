<template>
    <el-container>
        <el-aside width="200px" class="min-h-screen bg-dark-900">
            <component :is="nav" />
        </el-aside>
        <el-container class="bg-zinc-100">
            <el-header class="bg-light-50">
                <component :is="header" />
            </el-header>
            <el-main class="m-3 max-h-[calc(100vh-60px-1.5rem)] overflow-y-scroll" style="padding: 0;">
                <!-- <transition name="fade" mode="out-in" appear> -->
                    <router-view></router-view>
                <!-- </transition> -->
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang='ts' setup>
import { Transition } from 'Vue'
import nav from "@/layout/nav.vue";
import header from "@/layout/header.vue";
</script>

<style lang='scss'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>