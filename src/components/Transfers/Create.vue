<template>
    <div class="card">
        <div class="card-header"><h2>Registro de Transacciones</h2></div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <label>Cédula</label>
                    <input type="text" class="form-control" v-model="data.card">
                </div>
                <div class="col-md-6">
                    <label>Nombre</label>
                    <input type="text" class="form-control" v-model="data.name">
                </div>
                <div class="col-md-6">
                    <label>Apellido</label>
                    <input type="text" class="form-control" v-model="data.last_name">
                </div>
                <div class="col-md-6">
                    <label>Teléfono</label>
                    <input type="text" class="form-control" v-model="data.phone">
                </div>
                <div class="col-md-6">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="data.email">
                </div>
                <div class="col-md-6">
                    <label>Hospital</label>
                    <v-select class="form-control"></v-select>
                </div>
                <div class="col-md-12 text-center">
                    <a class="btn btn-success" @click="send">Registrar</a>
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
        methods: {
            send() {
                Swal.fire("Excelente", "Se guardó con éxito", "success")
            }
        }

    }
</script>

<style scoped>

</style>