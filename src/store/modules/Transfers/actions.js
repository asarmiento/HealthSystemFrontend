import axios from "axios";

export default {

    getTransfersAction(context){
       const Transfers = axios.get("/data-Transfers")
        localStorage.setItem('Transfers',JSON.stringify(Transfers))
        context.commit('setTransfersMutation',{
            Patients:Transfers
        })
    }


}