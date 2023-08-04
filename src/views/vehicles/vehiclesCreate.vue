<template>
  <view-layout>
    <create-vehicles/>
  </view-layout>
</template>
  
  
  <script>
    import createvehicles from './../../components/vehicles/create.vue'
    import viewLayout from './../Layout/layout.vue'
    export default {
      name: "create",
      components:{createvehicles,viewLayout}
    }
  </script>
  
  <style scoped>
  
  </style>
