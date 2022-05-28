<template>
    <div>
        资料详情
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import useData from '@/hooks/createOrder'
import { REQUEST_CODE } from '@/utils/auth'
const { dental, boneList, malocclusionList, mainDescList, targetList, sagittalFirst, sagittalSecond,
    coverToothFirst, coverToothSecond1, coverToothSecond2, coverToothSecond3, frontToothFirst, frontToothSecond,
    backToothFirst, backToothSecond, centerFirst, centerSecond1, centerSecond2, clearance1, clearance2, clearance3,
    crowded, crowdedSecond1, crowdedSecond3, crowdedSecond4, crowdedSecond2, exelcymosisList, orthodonticImplantFirst,
    orthodonticImplantSecond, anchorList } = useData()

</script>

<style scoped>
</style>