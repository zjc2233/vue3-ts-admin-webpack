<template>
    <div class="maininner-light-box">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="">
                <el-radio-group v-model="radio2" class="">
                    <el-radio-button label="1">全部</el-radio-button>
                    <el-radio-button label="2">今天</el-radio-button>
                    <el-radio-button label="3">昨天</el-radio-button>
                    <el-radio-button label="4">最近7天</el-radio-button>
                    <el-radio-button label="5">最近30天</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="">
                <el-date-picker v-model="value2" type="daterange" unlink-panels range-separator="至"
                    start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" />
            </el-form-item>
        </el-form>
        <div class=" bg-gray-100 h-40 rounded pt-4">
            <div class="ml-4 flex justify-start items-center">
                <span class="text-base font-bold">
                    收款金额
                </span>
                <el-radio-group v-model="radio2" class="ml-5">
                    <el-radio-button label="1">实收金额</el-radio-button>
                    <el-radio-button label="2">预计收款</el-radio-button>
                </el-radio-group>
            </div>
            <div class="flex justify-around items-center ">
                <div class="flex flex-col justify-around items-center h-20">
                    <div class="text-dark-50 ">总收费(元)</div>
                    <div class="text-xl font-bold">￥2700</div>
                </div>
                <div class="flex flex-col justify-around items-center h-20">
                    <div class="text-dark-50 ">总收费(元)</div>
                    <div class="text-xl font-bold">￥2700</div>
                </div>
                <div class="flex flex-col justify-around items-center h-20">
                    <div class="text-dark-50 ">总收费(元)</div>
                    <div class="text-xl font-bold">￥2700</div>
                </div>
                <div class="flex flex-col justify-around items-center h-20">
                    <div class="text-dark-50 ">总收费(元)</div>
                    <div class="text-xl font-bold">￥2700</div>
                </div>
                <div class="flex flex-col justify-around items-center h-20">
                    <div class="text-dark-50 ">总收费(元)</div>
                    <div class="text-xl font-bold">￥2700</div>
                </div>
            </div>
        </div>

        <div class="flex justify-between mt-6">
            <el-form :inline="true" class="demo-form-inline ">
                <el-form-item label="">
                    <el-radio-group v-model="radio2" class="">
                        <el-radio-button label="4">最近7天</el-radio-button>
                        <el-radio-button label="5">最近30天</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="">
                    <el-date-picker v-model="value2" type="daterange" unlink-panels range-separator="至"
                        start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" />
                </el-form-item>
            </el-form>
            <el-radio-group v-model="radio2" class="ml-5">
                <el-radio-button label="1">实收金额</el-radio-button>
                <el-radio-button label="2">预计收款</el-radio-button>
            </el-radio-group>
        </div>
        <component :is="chart"></component>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import chart from '@/views/financial/chart.vue'

const value2 = ref('')

const shortcuts = [
    {
        text: '今天',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(new Date(new Date(new Date().setHours(0)).setMinutes(0)).setSeconds(0)) // 当天的0点0分0秒
            return [start, end]
        },
    },
    {
        text: '昨天',
        value: () => {
            const end = new Date()
            const start = new Date()
            end.setTime(new Date(new Date(new Date().setHours(0)).setMinutes(0)).setSeconds(0))
            start.setTime(new Date(new Date(new Date().setHours(0)).setMinutes(0)).setSeconds(0) - 3600 * 1000 * 24 * 1)
            return [start, end]
        },
    },
    {
        text: '最近7天',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
        },
    },
    {
        text: '最近30天',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
        },
    },
]
const radio2 = ref('1')

</script>

<style scoped>
</style>