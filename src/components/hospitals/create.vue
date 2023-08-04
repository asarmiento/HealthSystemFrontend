<template>
    <div class="card">
        <div class="card-header"><h2>Registro de hospitales</h2></div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <label>Nombre</label>
                    <input type="text" class="form-control" v-model="data.name">
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
        name: "createHospital",
        components: {vSelect, Swal},
        data() {
            return {
                data: {
                    name: '',
                   
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