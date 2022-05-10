<template>
    <!-- 头部赛选 -->
    <el-form :inline="true" :model="formInline" ref="ruleFormRef" class="demo-form-inline">
        <el-form-item label="关键词" prop="name" class="min-w-md">
            <el-input v-model="formInline.name" placeholder="请输入患者名称/病例编号/手机号/订单号等关键词" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">搜索</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
    </el-form>
    <!-- 添加 -->
    <el-button type="primary" @click="submitForm(ruleFormRef)">添加</el-button>
    <!-- 表格 -->
    <el-table :data="tableData" class="mt-4" stripe style="width: 100%" :header-cell-style="{background:'#F7F8FA'}" >
        <el-table-column v-for="column in tableColumn" :key="column.prop" :prop="column.prop" :label="column.label"
            :width="column.label">
        </el-table-column>
    </el-table>
    <el-pagination v-model:currentPage="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]"
        :small="small" :disabled="disabled" :background="background" layout="sizes, prev, pager, next, jumper"
        :total="400" class="justify-center mt-4" @size-change="handleSizeChange" @current-change="handleCurrentChange">
    </el-pagination>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const ruleFormRef = ref<FormInstance>();
const formInline = reactive({
    name: "",
});
const tableColumn = [
    {
        label: '供应商名称',
        prop: 'name',
        width: '180',
    },
    {
        label: '加工服务类型',
        prop: 'type',
        width: '360',
    },
    {
        label: '供应商地址',
        prop: 'address',
        width: '360',
    },
    {
        label: '联系人',
        prop: 'person',
        width: '360',
    },
    {
        label: '联系电话',
        prop: 'tel',
        width: '360',
    },
]
const tableData = [
    {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
];
const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log("submit!");
        } else {
            console.log("error submit!", fields);
        }
    });
};

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};

const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
}
</script>
<style lang="scss" scoped>
</style>
