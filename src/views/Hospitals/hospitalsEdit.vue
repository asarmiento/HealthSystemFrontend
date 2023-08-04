<template>
  <view-layout>
    <edit-hospital/>
  </view-layout>
</template>

<script>
  import editHospital from './../../components/hospitals/edit.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "create",
    components:{editHospital,viewLayout}
  }
</script>

<style scoped>

</style>