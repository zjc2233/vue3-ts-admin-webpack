<template>
    <div class="maininner-light-box">
        <el-form ref="ruleFormRef" :inline="true" :model="formFilter" class="demo-form-inline">
            <el-form-item label="创建时间：">
                <el-date-picker v-model="createTime" type="daterange" range-separator="至" start-placeholder="开始日期"
                    end-placeholder="结束日期" @visible-change="createTimeVisible" />
            </el-form-item>
            <el-form-item label="所属门诊：">
                <!-- TODO: 后续确认 -->
                <el-input v-model="formFilter.keyWords" placeholder="" style="width: 100px;" />
            </el-form-item>
            <el-form-item label="年龄：">
                <!-- TODO: 后续确认 -->
                <el-select v-model="formFilter.keyWords" placeholder="全部" class="w-24">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="品牌：">
                <el-select v-model="formFilter.brandId" placeholder="全部">
                    <el-option v-for="item in brandLists" :key="item.id" :label="item.brandName" :value="item.id" />
                </el-select>
            </el-form-item>
            <el-form-item label="患者性别：">
                <!-- TODO: 后续确认 -->
                <el-select v-model="formFilter.keyWords" placeholder="全部" class="w-24">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="优先级：">
                <!-- TODO: 后续确认 -->
                <el-select v-model="formFilter.keyWords" placeholder="全部" class="w-24">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="设计成员：">
                <!-- TODO: 后续确认 -->
                <el-select v-model="formFilter.keyWords" placeholder="全部">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="审核成员：">
                <!-- TODO: 后续确认 -->
                <el-select v-model="formFilter.keyWords" placeholder="全部">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="阶段进度：">
                <!-- TODO: 后续确认 -->
                <el-select v-model="formFilter.keyWords" placeholder="全部">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="关键词">
                <el-input v-model="formFilter.keyWords" placeholder="请输入患者名称/病例编号/手机号/订单号等关键词" @keydown.enter="onOrderList()" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onOrderList()">搜索</el-button>
                <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
        </el-form>
        <el-divider style="margin: 5px 0 20px;" />
        <!-- TODO: 后续确认 -->
        <el-select v-model="formFilter.keyWords" placeholder="全部状态">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-radio-group v-model="radio4" class="ml-10">
            <el-radio label="1" border>全部</el-radio>
            <el-radio label="2" border>资料待审核</el-radio>
        </el-radio-group>
        <!-- 表格 -->
        <el-table :data="tableData" height="580" class="mt-4" stripe style="width: 100%"
            :header-cell-style="{ background: '#F7F8FA' }" @row-dblclick="toDetail">
            <el-table-column v-for="column in tableColumn" :key="column.prop" :prop="column.prop" :label="column.label"
                :width="column.width">
                <template v-if="column.prop === 'operation'" #default="scope">
                    <el-button type="primary" @click="toDetail(scope.row)">详情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination v-model:currentPage="formFilter.pageIndex" v-model:page-size="formFilter.pageSize"
            :page-sizes="[10, 20, 30, 50]" :small="small" :disabled="disabled" :background="background"
            layout="total, sizes, prev, pager, next, jumper" :total="formFilter.total" class="justify-center mt-4"
            @size-change="handleSizeChange" @current-change="handleCurrentChange">
        </el-pagination>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, } from 'element-plus'
import { REQUEST_CODE } from '@/utils/auth';
import { orderList } from '@/api/designProcess/index'
import { brandList } from '@/api/brand/index'

const router = useRouter()

interface formFilterInterface {
    brandId: number | string // 品牌id
    endDate: Date | string  // 创建时间结束日期
    keyWords: string    // 关键字
    orderType: number   // 订单类型： 1.隐形正畸 2.义齿加工
    pageIndex: number
    pageSize: number
    startDate: Date | string // 创建时间 开始日期
    status: number  // 状态
    total: number
}
let createTime = ref('')
const formFilter: formFilterInterface = reactive({
    brandId: '',
    endDate: '',
    keyWords: '',
    orderType: 1,
    pageIndex: 1,
    pageSize: 20,
    startDate: '',
    status: NaN,
    total: 0
})
// 设置创建时间相关日期
const createTimeVisible = (e: any) => {
    if (!e) {
        formFilter.endDate = createTime.value[0]
        formFilter.startDate = createTime.value[1]
    }
}

const small = ref(false)
const background = ref(true)
const disabled = ref(false)
let tableData: any = ref([]);
let brandLists: any = ref([]); // 品牌列表
const tableColumn = [
    {
        label: '编号',
        prop: 'orderId',
        width: '100'
    },
    {
        label: '患者名称',
        prop: 'clinicName',
    },
    {
        label: '患者性别',
        prop: 'address',
    },
    {
        label: '患者生日',
        prop: 'person',
    },
    {
        label: '提交人/医生',
        prop: 'patientName',
    },
    {
        label: '门诊/渠道',
        prop: 'createTime',
    },
    {
        label: '创建时间',
        prop: 'status',
    },
    {
        label: '优先级',
        prop: 'status',
    },
    {
        label: '品牌',
        prop: 'brandName',
    },
    {
        label: '设计成员',
        prop: 'status',
    },
    {
        label: '审核成员',
        prop: 'status',
    },
    {
        label: '阶段进度',
        prop: 'status',
    },
    {
        label: '状态',
        prop: 'status',
    },
    {
        label: '已收款',
        prop: 'status',
    },
    {
        label: '操作',
        prop: 'operation',
    },
]





// 获取品牌列表
const onBrandList = async () => {
    let res: any = await brandList({
        keyWords: null,
        pageIndex: 1,
        pageSize: 1000
    })
    if (res.code === REQUEST_CODE) {
        brandLists.value = res.data.records
    }
}
onBrandList()

// 订单列表
const onOrderList = async () => {
    let res: any = await orderList(formFilter)
    console.log(res);
    if (res.code === REQUEST_CODE) {
        tableData.value = res.data.records
        formFilter.total = res.data.total
    }
}
onOrderList()

// pagesize变化重新获取列表
const handleSizeChange = (val: number) => {
    formFilter.pageSize = val
    onOrderList()
}
// pageIndex变化重新获取列表
const handleCurrentChange = (val: number) => {
    formFilter.pageIndex = val
    onOrderList()
}




const ruleFormRef = ref<FormInstance>()

const options = reactive([
    {
        value: 0,
        label: '全部',
    },
])

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
const onSubmit = (formEl: FormInstance | undefined) => {
    console.log('submit!')
}

const radio4 = ref('1')

// let total = ref(0)

// 跳转到详情
const toDetail = (row: any) => {
    router.push({
        path: '/invisibleDetail',
        query: {
            id: window.btoa(row.orderId)
        }
    })
}







</script>
<style lang="scss" scoped>
::v-deep .el-radio__input {
    display: none !important;
}
</style>
