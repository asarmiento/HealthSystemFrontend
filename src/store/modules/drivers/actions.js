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
        const Drivers = axios.get("/data-HDriversController")
        
         localStorage.setItem('drivers',JSON.stringify(drivers))
         context.commit('setdriversMutation',{
             drivers:drivers
         })
     }

}


