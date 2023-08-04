import axios from "axios";

export default {

    getVehiclesAction(context){
       const vehicles = axios.get("/data-vehicles")
        localStorage.setItem('vehicles',JSON.stringify(vehicles))
        context.commit('setVehicleMutation',{
            vehicles:vehicles
        })
    },
    editVehiclesAction(context){
        const vehicles = axios.get("vehicles/{id}/edit")
         localStorage.setItem('vehicles',JSON.stringify(vehicles))
         context.commit('setVehicleMutation',{
             vehicles:vehicles
         })
    },
    deleteVehiclesAction(context){
        const vehicles = axios.get("vehicles-delete/{id}")
         localStorage.setItem('vehicles',JSON.stringify(vehicles))
         context.commit('setVehicleMutation',{
             vehicles:vehicles
         })
     },
     storeVehiclesAction(context){
        const vehicles = axios.get("vehicles-store")
         localStorage.setItem('vehicles',JSON.stringify(vehicles))
         context.commit('setVehicleMutation',{
             vehicles:vehicles
         })
     },
     updateVehiclesAction(context){
        const vehicles = axios.get("vehicles-update/{id}")
         localStorage.setItem('vehicles',JSON.stringify(vehicles))
         context.commit('setVehicleMutation',{
             vehicles:vehicles
         })
     }
     
}