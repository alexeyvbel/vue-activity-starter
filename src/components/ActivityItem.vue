<template>
    <div>
        <activity-item-update v-if="isUpdateActive"/>
        <activity-item-detail v-else
                              :activity="activity"
                              :categories="categories"
                              @toggleUpdate="changeUpdateState"/>
    </div>
</template>

<script>
import ActivityItemDetail from "@/components/ActivityItemDetail";
import ActivityItemUpdate from "@/components/ActivityItemUpdate";
export default {
    components: {ActivityItemUpdate, ActivityItemDetail},
    props: {
        categories:{
            type:Object,
            required: true
        },
        activity: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isUpdateActive: false
        }
    },
    methods: {
        changeUpdateState (isUpdate) {
            this.isUpdateActive = isUpdate
        }
    }
}
</script>

<style lang="scss" scoped>

</style>