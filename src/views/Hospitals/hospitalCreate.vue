<template>
  <view-layout>
    <create-hospital />
  </view-layout>
</template>

<script>
  import createHospital from './../../components/hospitals/create.vue';
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "create",
    components:{createHospital,viewLayout}
  }
</script>

<style scoped>

</style>