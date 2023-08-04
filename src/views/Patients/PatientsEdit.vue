<template>
  <view-layout>
    <edit-Patients/>
  </view-layout>
</template>

<script>
  import editPatients from './../../components/patients/edit.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "create",
    components:{editPatients,viewLayout}
  }
</script>

<style scoped>

</style>