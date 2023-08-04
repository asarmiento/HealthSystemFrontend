<template>
  <view-layout>
    <edit-Transfers/>
  </view-layout>
</template>


<script>
  import editTransfers from './../../components/Transfers/edit.vue'
  import viewLayout from './../Laoyut/layout.vue'
  export default {
    name: "create",
    components:{editTransfers,viewLayout}
  }
</script>

<style scoped>

</style>