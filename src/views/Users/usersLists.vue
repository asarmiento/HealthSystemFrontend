    <template>
      <view-layout>
        <lists-Users/>
      </view-layout>
    </template>


<script>
  import listsUsers from './../../components/Users/list.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "list",
    components:{listsUsers,viewLayout}
  }
</script>

    <style scoped>

      </style>