import axios from "axios";

export default {

    getdriversAction(context){
       const Drivers = axios.get("/data-drivers")
        localStorage.setItem('drivers',JSON.stringify(drivers))
        context.commit('setdriversMutation',{
            drivers:drivers
        })
    }


}