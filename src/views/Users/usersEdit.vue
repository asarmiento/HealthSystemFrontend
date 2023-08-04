   <template>
    <view-layout>
      <edit-User/>
    </view-layout>
  </template>


<script>
  import editUsers from './../../components/users/edit.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "edit",
    components:{editUsers,viewLayout}
  }
</script>


   <style scoped>

   </style>