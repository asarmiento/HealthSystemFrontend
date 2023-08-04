<template>
    <div class="card">
        <div class="card-header"><h2>Actualizar de Usuarios</h2></div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <label>Nombre</label>
                    <input type="text" class="form-control" v-model="data.name">
                </div>
                <div class="col-md-6">
                    <label>Contraseña</label>
                    <input type="text" class="form-control" v-model="data.password">
                </div>
                <div class="col-md-6">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="data.email">
                </div>
                <div class="col-md-6">
                    <label>Usuario</label>
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
        name: "createUsers",
        components: {vSelect, Swal},
        data() {
            return {
                data: {
                    name: '',
                    password: '',
                    email: '',
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