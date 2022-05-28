<template>
    <div class="bg-light-50 h-24 flex flex-col justify-center">
        <div class="ml-4 mr-4 flex justify-between items-center flex-1">
            <div>
                <el-icon @click="router.go(-1)">
                    <Back />
                </el-icon>
                <span class="ml-3">
                    订单类型：
                </span>
                <label>
                    {{orderTypeList[props.baseInfo?.orderType]}}
                </label>
                <span class="ml-10">
                    品牌：
                </span>
                <label>
                    {{props.baseInfo?.brandName}}
                </label>
                <span class="ml-10">
                    系列：
                </span>
                <label>
                    {{props.baseInfo?.brandSpec?.series}}
                </label>
                <span class="ml-10">
                    门诊：
                </span>
                <label>
                    {{props.baseInfo?.clinicName}}
                </label>
                <span class="ml-10">
                    诊断医生：
                </span>
                <label>
                    {{props.baseInfo?.doctorName}}
                </label>
            </div>
            <div>
                <span class="ml-10">
                    当前进度：
                </span>
                <span class="text-yellow-300">
                    <!-- TODO: 后续调整 -->
                    资料待审核
                </span>
            </div>
        </div>
        <el-divider style="margin: 1px 0 1px;" />
        <div class="ml-4 mr-4 flex justify-start items-center flex-1">
            <el-avatar :size="30" :src="props.patientInfo?.avatarPath" />
            <span class="ml-3">
                姓名：
            </span>
            <label>
                {{ props.patientInfo?.name }}
            </label>
            <span class="ml-10">
                性别：
            </span>
            <label>
                {{genderList[props.patientInfo?.gender]}}
            </label>
            <span class="ml-10">
                出生日期：
            </span>
            <label>
                {{ props.patientInfo?.birthday }}
            </label>
            <span class="ml-10">
                电话： 
            </span>
            <label>
                {{ props.patientInfo?.mobile }}
            </label>
            <span class="ml-10">
                病例编号：
            </span>
            <label>
                {{ props.baseInfo?.orderId }}
            </label>
            <span class="ml-10">
                创建时间： 
            </span>
            <label>
                {{ props.baseInfo?.createTime }}
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { orderTypeList, genderList } from '@/utils/auth'

const router = useRouter()

const state = reactive({
    circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})

const props = defineProps({
    baseInfo: Object,
    patientInfo: Object
})


const { circleUrl } = toRefs(state)
</script>

<style scoped>
</style>