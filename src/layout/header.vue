<template>
    <div class="h-full flex justify-between items-center">
        <div></div>
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                我的<el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { removeToken } from '@/utils/auth'

const router = useRouter()

/**
 * 退出登录
 */
const loginOut = (): void=> {
    removeToken()
    router.push('/login')
}

</script>

<style lang="scss" scoped>
</style>