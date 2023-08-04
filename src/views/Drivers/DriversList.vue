<template>
  <view-layout>
    <list-drivers />
  </view-layout>
</template>

<script>
  import listDrivers from './../../components/Drivers/list.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "list",
    components:{listDrivers, viewLayout}
  }
</script>

<style scoped>

</style>
