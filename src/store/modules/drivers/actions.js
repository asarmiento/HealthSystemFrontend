import axios from "axios";

export default {

    getDriversAction(context){
       const Drivers = axios.get("/data-drivers")
        localStorage.setItem('drivers',JSON.stringify(drivers))
        context.commit('setdriversMutation',{
            drivers:drivers
        })
    },
    editDriversAction(context){
        const Drivers = axios.get("h-drivers/{id}/edit")
         localStorage.setItem('drivers',JSON.stringify(drivers))
         context.commit('setdriversMutation',{
             drivers:drivers
         })
     },
     destroyDriversAction(context){
        const Drivers = axios.get("h-drivers-delete/{id}")
         localStorage.setItem('drivers',JSON.stringify(drivers))
         context.commit('setdriversMutation',{
             drivers:drivers
         })
     },
     estoreDriversAction(context){
        const Drivers = axios.get("h-drivers-store")
         localStorage.setItem('drivers',JSON.stringify(drivers))
         context.commit('setdriversMutation',{
             drivers:drivers
         })
     },
     updateDriversAction(context){
        const Drivers = axios.get("h-drivers-update/{id}")
         localStorage.setItem('drivers',JSON.stringify(drivers))
         context.commit('setdriversMutation',{
             drivers:drivers
         })
     }

}


