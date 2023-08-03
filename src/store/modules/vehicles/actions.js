import axios from "axios";

export default {

    getUsersAction(context){
       const users = axios.get("/data-users")
        localStorage.setItem('users',JSON.stringify(users))
        context.commit('setUserMutation',{
            users:users
        })
    }


}