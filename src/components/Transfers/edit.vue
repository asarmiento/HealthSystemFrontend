<template>
    <div class="card">
        <div class="card-header"><h2>Actualizar de Transacciones</h2></div>
        <div class="card-body">
            <div class="row">
                 <div class="col-md-6">
                    <label>Fecha</label>
                    <input type="text" class="form-control" v-model="data.date">
                </div>
                <div class="col-md-6">
                    <label>Origen</label>
                    <input type="text" class="form-control" v-model="data.origin">
                </div>
                <div class="col-md-6">
                    <label>destino</label>
                    <input type="text" class="form-control" v-model="data.destination">
                </div>
                <div class="col-md-6">
                    <label>Camilla</label>
                    <input type="text" class="form-control" v-model="data.stretcher">
                </div>
                <div class="col-md-6">
                    <label>Compañia</label>
                    <input type="email" class="form-control" v-model="data.companion">
                </div>
                <div class="col-md-6">
                    <label>ID del paciente</label>
                    <input type="text" class="form-control" v-model="data.patient_id">
                </div>
                <div class="col-md-6">
                    <label>identificación del conductor</label>
                    <input type="text" class="form-control" v-model="data.driver_id">
                </div>
                <div class="col-md-6">
                    <label>ID del vehículo</label>
                    <input type="email" class="form-control" v-model="data.vehicle_id">
                </div>
                <div class="col-md-6">
                    <label>Transfers</label>
                    <v-select class="form-control"></v-select>
                </div>
                <div class="col-md-12 text-center">
                    <a class="btn btn-success" @click="send">Actualizar</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vSelect from 'vue-select'
    import Swal from 'sweetalert2'

    export default {
        name: "createTransfers",
        components: {vSelect, Swal},
        data() {
            return {
                data: {
                    date: '',
                    origin: '',
                    destination: '',
                    stretcher: '',
                    companion: '',
                    patient_id: ''
                    driver_id: '',
                    vehicle_id: ''
                }
            }
        },
        mounted(){
          this.$store.dispatch('getHospitalsAction')

        },
        methods: {
            send() {
                Swal.fire("Excelente", "Se guardó con éxito", "success")
            }
        }

    }
</script>

<style scoped>

</style>