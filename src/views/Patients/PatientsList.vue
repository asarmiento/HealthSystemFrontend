<template>
  <view-layout>
    <list-Patients/>
  </view-layout>
</template>


<script>
  import listPatients from './../../components/patients/list.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "list",
    component:{listPatients,viewLayout}
  }
</script>

<style scoped>

</style>
