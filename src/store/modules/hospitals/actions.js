import axios from "axios";

export default {

    getHospitalsAction(context){
       const hospitals = axios.get("/data-hospitals")
        localStorage.setItem('hospitals',JSON.stringify(hospitals))
        context.commit('setHospitalMutation',{
            hospitals:hospitals
        })
    },
    editHospitalsAction(context){
        const hospitals = axios.get("hospital/{id}/edit")
         localStorage.setItem('hospitals',JSON.stringify(hospitals))
         context.commit('setHospitalMutation',{
             hospitals:hospitals
         })
     },
     deleteHospitalsAction(context){
        const hospitals = axios.get("hospital-delete/{id}")
         localStorage.setItem('hospitals',JSON.stringify(hospitals))
         context.commit('setHospitalMutation',{
             hospitals:hospitals
         })
     },
     storeHospitalsAction(context){
        const hospitals = axios.get("hospital-store")
         localStorage.setItem('hospitals',JSON.stringify(hospitals))
         context.commit('setHospitalMutation',{
             hospitals:hospitals
         })
     },
     updateHospitalsAction(context){
        const hospitals = axios.get("hospital-update/{id}")
         localStorage.setItem('hospitals',JSON.stringify(hospitals))
         context.commit('setHospitalMutation',{
             hospitals:hospitals
         })
     }
}

