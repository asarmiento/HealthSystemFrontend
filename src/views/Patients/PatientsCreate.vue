<template>
  <view-layout>
    <create-Patients/>
  </view-layout>
</template>

<script>
  import createPatients from './../../components/patients/create.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "create",
    components:{createPatients,viewLayout}
  }
</script>

<style scoped>

</style>

