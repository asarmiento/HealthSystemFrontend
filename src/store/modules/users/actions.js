import axios from "axios";
import Swal from 'sweetalert2'
export default {

    getUsersAction(context){
       let users = axios.get("/data-users").then(response=>{
           console.log(response.data)
           localStorage.setItem('users',JSON.stringify(response.data))
           context.commit('setUsersMutation',{
               users:response.data
           })
       }).catch(error=>{
           Swal.fire("Atención","Se ha generado un error","danger")
       })
    },
    tryUsersAction(context){

           let users = JSON.parse(localStorage.getItem('users'))
            context.commit('setUsersMutation',{
                users:(users)
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
     storeUsersAction(context,payload){
        const users = axios.post("users-store",payload)
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
