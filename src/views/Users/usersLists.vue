    <template>
      <view-layout>
        <list-users/>
      </view-layout>
    </template>


<script>
  import listusers from './../../components/users/list.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "list",
    components:{listusers,viewLayout}
  }
</script>

    <style scoped>

      </style>