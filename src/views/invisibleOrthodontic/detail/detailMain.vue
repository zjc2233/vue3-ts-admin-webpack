<template>
    <el-tabs v-model="activeName" class="demo-tabs bg-light-50" @tab-click="handleClick">
        <el-tab-pane label="订单进度" name="first">User</el-tab-pane>
        <el-tab-pane label="资料详情" name="second">
            <component :is='informationDetail'></component>
        </el-tab-pane>
        <el-tab-pane label="病例资料记录" name="third">Role</el-tab-pane>
        <el-tab-pane label="3D设计记录" name="fourth">Task</el-tab-pane>
        <el-tab-pane label="订单信息" name="fifth">Task</el-tab-pane>
    </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import informationDetail from '@/views/invisibleOrthodontic/detail/informationDetail.vue'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>
<style scoped lang="scss">
::v-deep .demo-tabs>.el-tabs__content {
    padding: 0px 20px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
::v-deep .el-tabs__nav{
    transform: translateX(20px) !important;
}
</style>
