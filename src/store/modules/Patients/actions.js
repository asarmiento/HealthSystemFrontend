import axios from "axios";

export default {

    getPatientsAction(context){
       const Patients = axios.get("/data-Patients")
        localStorage.setItem('Patients',JSON.stringify(Patients))
        context.commit('setPatientsMutation',{
            Patients:Patients
        })
    }


}
