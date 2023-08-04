import axios from "axios";

export default {

    getPatientsAction(context){
       const Patients = axios.get("/data-Patients")
        localStorage.setItem('Patients',JSON.stringify(Patients))
        context.commit('setPatientsMutation',{
            Patients:Patients
        })
    },
    editPatientsAction(context){
        const Patients = axios.get("Pantients/{id}/edit")
         localStorage.setItem('Patients',JSON.stringify(Patients))
         context.commit('setPatientsMutation',{
             Patients:Patients
         })
     },
     destroyPatientsAction(context){
        const Patients = axios.get("Pantients-delete/{id}")
         localStorage.setItem('Patients',JSON.stringify(Patients))
         context.commit('setPatientsMutation',{
             Patients:Patients
         })
     },
     storePatientsAction(context){
        const Patients = axios.get("Pantients-store")
         localStorage.setItem('Patients',JSON.stringify(Patients))
         context.commit('setPatientsMutation',{
             Patients:Patients
         })
     },
     updatePatientsAction(context){
        const Patients = axios.get("Pantients-update/{id}")
         localStorage.setItem('Patients',JSON.stringify(Patients))
         context.commit('setPatientsMutation',{
             Patients:Patients
         })
     }

}
