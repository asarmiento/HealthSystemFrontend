    <template>
      <view-layout>
        <list-users/>
      </view-layout>
    </template>


<script>
  import listUsers from './../../components/users/list.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "list",
    components:{listUsers,viewLayout}
  }
</script>

    <style scoped>

      </style>