<template>
  <view-layout>
    <list-vehicles />
  </view-layout>
</template>


<script>
  import listVehicles from './../../components/vehicles/list.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "list",
    components:{listVehicles,viewLayout}
  }
</script>

<style scoped>

</style>