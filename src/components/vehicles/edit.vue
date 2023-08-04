<template>
    <div class="card">
        <div class="card-header"><h2>Actualizar de Vehiculos</h2></div>  
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <label>Placa</label>
                    <input type="text" class="form-control" v-model="data.plate">
                </div>
                <div class="col-md-6">
                    <label>Tipo</label>
                    <input type="text" class="form-control" v-model="data.type">
                </div>
                <div class="col-md-6">
                    <label>Tipo_completo</label>
                    <input type="text" class="form-control" v-model="data.full_type">
                </div>
                <div class="col-md-6">
                    <label>Año</label>
                    <input type="text" class="form-control" v-model="data.year">
                </div>
                <div class="col-md-6">
                    <label>Hospital_id</label>
                    <input type="email" class="form-control" v-model="data.hospital_id">
                </div>s
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
        name: "createDrivers",
        components: {vSelect, Swal},
        data() {
            return {
                data: {
                    plate: '',
                    type: '',
                    full_type: '',
                    year: '',
                    hospital_id: ''
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