<template>
    <view-layout>
    <create-drivers />
    </view-layout>
</template>

<script>
  import createDrivers from './../../components/Drivers/create.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "create",
    components:{createDrivers,viewLayout}
  }
</script>

<style scoped>

</style>
