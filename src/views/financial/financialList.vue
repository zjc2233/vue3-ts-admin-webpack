<template>
    <div class="maininner-light-box">
        <el-form ref="ruleFormRef" :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="关键词：" prop="keyWords" class="min-w-md">
                <el-input v-model="formInline.user" placeholder="请输入患者名称/病例编号/手机号/订单号等关键词" @keydown.enter="onSubmit(ruleFormRef)" />
            </el-form-item>
            <el-form-item label="订单种类：">
                <!-- TODO: 后续确认 -->
                <el-select v-model="formInline.user" placeholder="全部" class="w-24">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="支付方式：">
                <!-- TODO: 后续确认 -->
                <el-select v-model="formInline.user" placeholder="全部">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="订单状态：">
                <!-- TODO: 后续确认 -->
                <el-select v-model="formInline.user" placeholder="全部" class="w-24">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="支付日期：">
                <el-date-picker v-model="formInline.date1" type="daterange" unlink-panels range-separator="至"
                    start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit(ruleFormRef)">搜索</el-button>
                <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
        </el-form>
        <el-divider style="margin: 5px 0 20px;" />
        <!-- 表格 -->
        <el-table :data="tableData" class="mt-4" stripe style="width: 100%"
            :header-cell-style="{ background: '#F7F8FA' }">
            <el-table-column v-for="column in tableColumn" :key="column.prop" :prop="column.prop" :label="column.label"
                :width="column.width">
            </el-table-column>
        </el-table>
        <el-pagination v-model:currentPage="formInline.pageIndex" v-model:page-size="formInline.pageSize"
            :page-sizes="[10, 20, 30, 50]" :small="small" :disabled="disabled" :background="background"
            layout="total, sizes, prev, pager, next, jumper" :total="total" class="justify-center mt-4"
            @size-change="handleSizeChange" @current-change="handleCurrentChange">
        </el-pagination>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const formInline = reactive({
    date1: '',
    user: '',
    region: '',
    pageIndex: 1,
    pageSize: 20
})
const options = reactive([
    {
        value: 0,
        label: '全部',
    },
])


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

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
const onSubmit = (formEl: FormInstance | undefined) => {
    console.log('submit!')
}

const radio4 = ref('1')

let total = ref(0)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)
let tableData: any = ref([]);
const tableColumn = [
    {
        label: '订单编号',
        prop: 'brandName',
        width: '100'
    },
    {
        label: '患者名称',
        prop: 'processType',
    },
    {
        label: '提交人/医生',
        prop: 'address',
    },
    {
        label: '门诊/渠道',
        prop: 'person',
    },
    {
        label: '订单种类',
        prop: 'tel',
    },
    {
        label: '品牌',
        prop: 'createTime',
    },
    {
        label: '规格',
        prop: 'status',
    },
    {
        label: '支付类型',
        prop: 'status',
    },
    {
        label: '订单金额',
        prop: 'status',
    },
    {
        label: '支付方式',
        prop: 'status',
    },
    {
        label: '支付时间',
        prop: 'status',
    },
    {
        label: '发票类型',
        prop: 'status',
    },
    {
        label: '订单状态',
        prop: 'status',
    },
    {
        label: '留言',
        prop: 'status',
    },
    {
        label: '操作人',
        prop: 'status',
    },
    {
        label: '操作',
        prop: 'status',
    },
]

const handleSizeChange = (val: number) => {
    formInline.pageSize = val
}
const handleCurrentChange = (val: number) => {
    formInline.pageIndex = val
}

</script>
<style lang="scss" scoped>
::v-deep .el-radio__input {
    display: none !important;
}
</style>
