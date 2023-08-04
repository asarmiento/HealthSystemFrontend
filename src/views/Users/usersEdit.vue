   <template>
    <view-layout>
      <edit-user/>
    </view-layout>
  </template>


<script>
  import editUsers from './../../components/users/edit.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "edit",
    components:{editusers,viewLayout}
  }
</script>


   <style scoped>

   </style>