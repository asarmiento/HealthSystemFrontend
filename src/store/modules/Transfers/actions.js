import axios from "axios";

export default {

    getTransfersAction(context){
       const Transfers = axios.get("/data-Transfers")
        localStorage.setItem('Transfers',JSON.stringify(Transfers))
        context.commit('setTransfersMutation',{
            Patients:Transfers
        })
    },
    editTransfersAction(context){
        const Transfers = axios.get("h-transfers/{id}/edit")
         localStorage.setItem('Transfers',JSON.stringify(Transfers))
         context.commit('setTransfersMutation',{
             Patients:Transfers
         })
     },
     destroyTransfersAction(context){
        const Transfers = axios.get("h-transfers-delete/{id}")
         localStorage.setItem('Transfers',JSON.stringify(Transfers))
         context.commit('setTransfersMutation',{
             Patients:Transfers
         })
     },
     storeTransfersAction(context){
        const Transfers = axios.get("h-transfers-store")
         localStorage.setItem('Transfers',JSON.stringify(Transfers))
         context.commit('setTransfersMutation',{
             Patients:Transfers
         })
     },
     updateTransfersAction(context){
        const Transfers = axios.get("h-transfers-update/{id}")
         localStorage.setItem('Transfers',JSON.stringify(Transfers))
         context.commit('setTransfersMutation',{
             Patients:Transfers
         })
     }

}