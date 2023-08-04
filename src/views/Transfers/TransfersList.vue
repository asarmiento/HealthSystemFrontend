<template>
  <view-layout>
    <list-Transfers/>
  </view-layout>
</template>


<script>
  import listTransfers from './../../components/Transfers/list.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "list",
    component:{listTransfers,viewLayout}
  }
</script>

<style scoped>

</style>
