<template>
  <view-layout>
  <edit-Drivers/>
  </view-layout>
</template>

<script>
  import editDrivers from './../../components/Drivers/edit.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "create",
    components:{editDrivers, viewLayout}
  }
</script>

<style scoped>

</style>