import axios from "axios";

export default {

    getHospitalsAction(context){
       const hospitals = axios.get("/data-hospitals")
        localStorage.setItem('hospitals',JSON.stringify(hospitals))
        context.commit('setHospitalMutation',{
            hospitals:hospitals
        })
    }


}

