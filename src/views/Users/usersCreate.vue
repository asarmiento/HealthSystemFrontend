    <template>
      <view-layout>
        <create-User/>
      </view-layout>
</template>


<script>
  import createUser from './../../components/users/create.vue'
  import viewLayout from './../Layout/layout.vue'
  export default {
    name: "create",
    components:{createUser,viewLayout}
  }
</script>

<style scoped>

</style>