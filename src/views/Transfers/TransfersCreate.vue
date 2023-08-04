<template>
  <view-layout>
    <create-Transfers/>
  </view-layout>
</template>


<script>
  import createTransfers from './../../components/Transfers/Create.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "create",
    components:{createTransfers,viewLayout}
  }
</script>

<style scoped>

</style>