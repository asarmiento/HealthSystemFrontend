import axios from "axios";

export default {

    getUsersAction(context){
       const users = axios.get("/data-users")
        localStorage.setItem('users',JSON.stringify(users))
        context.commit('setUserMutation',{
            users:users
        })
    },
    editUsersAction(context){
        const users = axios.get("users/{id}/edit")
         localStorage.setItem('users',JSON.stringify(users))
         context.commit('setUserMutation',{
             users:users
         })
     },
     deleteUsersAction(context){
        const users = axios.get("users-delete/{id}")
         localStorage.setItem('users',JSON.stringify(users))
         context.commit('setUserMutation',{
             users:users
         })
     },
     storeUsersAction(context){
        const users = axios.get("users-store")
         localStorage.setItem('users',JSON.stringify(users))
         context.commit('setUserMutation',{
             users:users
         })
     },
     updateUsersAction(context){
        const users = axios.get("users-update/{id}")
         localStorage.setItem('users',JSON.stringify(users))
         context.commit('setUserMutation',{
             users:users
         })
     }
}
