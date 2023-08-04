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
    components:{editvehicles,viewLayout}
  }
</script>

<style scoped>

</style>