<template>
    <div>
        <component :is='detailHeader' :baseInfo="data.baseInfo" :patientInfo="data.patientInfo"></component>
        <div class="flex justify-between mt-2">
            <component :is='detailMain' style="flex-grow: 3;"></component>
            <div class="ml-2" style="flex-grow: 1;">
                <component :is='detailRemarks'></component>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { REQUEST_CODE } from '@/utils/auth'
import detailHeader from '@/views/invisibleOrthodontic/detail/detailHeader.vue';
import detailMain from '@/views/invisibleOrthodontic/detail/detailMain.vue';
import detailRemarks from '@/views/invisibleOrthodontic/detail/detailRemarks.vue';
import { informationDetail } from '@/api/designProcess/index'

const route = useRoute()
const orderId = window.atob(route.query.id as string)

let data = ref({
    baseInfo: {},
    patientInfo: {}
})

// 根据orderId获取资料详情
const onInformationDetail = async () => {
    let res: any = await informationDetail(orderId)
    if (res.code === REQUEST_CODE) {
        data.value = res.data
    }
}
onInformationDetail()

</script>

<style scoped>
</style>