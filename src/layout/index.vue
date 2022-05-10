<template>
    <el-container>
        <el-aside width="200px" class="min-h-screen bg-dark-900">
            <component :is="nav" />
        </el-aside>
        <el-container class="bg-zinc-100">
            <el-header class="bg-sky-200">Header</el-header>
            <el-main class="m-4 bg-light-50 rounded-xl">
                <transition name="fade" mode="out-in" appear>
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang='ts' setup>
import { Transition } from 'Vue'
import nav from "@/layout/nav.vue";
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