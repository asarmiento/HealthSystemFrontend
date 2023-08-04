<template>
  <view-layout>
    <list-Drivers/>
  </view-layout>
  
</template>

<script>
  import listDrivers from './../../components/Drivers/list.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "list",
    component:{listDrivers, viewLayout}
  }
</script>

<style scoped>

</style>
