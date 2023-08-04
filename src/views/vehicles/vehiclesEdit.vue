<template>
  <view-layout>
    <edit-vehicle/>
  </view-layout>
</template>


<script>
  import editvehicles from './../../components/vehicles/edit.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "create",
    component:{editvehicles,viewLayout}
  }
</script>

<style scoped>

</style>