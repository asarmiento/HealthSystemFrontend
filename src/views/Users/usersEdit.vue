   <template>
    <view-layout>
      <edit-user/>
    </view-layout>
  </template>


<script>
  import editusers from './../../components/users/edit.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "edit",
    component:{editusers,viewLayout}
  }
</script>


   <style scoped>

   </style>