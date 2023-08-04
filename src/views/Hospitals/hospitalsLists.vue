<template>
  <view-layout>
    <list-hospital/>
  </view-layout>
</template>

<script>
  import listHospital from './../../components/hospitals/list.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "list",
    component:{listHospital,viewLayout}
  }
</script>

<style scoped>

</style>