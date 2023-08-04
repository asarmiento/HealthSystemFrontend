<template>
    <div class="login">
        <h2>Iniciar Sesión</h2>
        <div class="from-group">
            <label>Correo Electrónico</label>
            <input type="text" class="form-control" v-model="data.email">
        </div>
        <div class="from-group mb-4">
            <label>Contraseña</label>
            <input type="password" class="form-control" v-model="data.password">
        </div>
        <div class="from-group text-center">
            <a class="btn btn-success">Iniciar Sesión</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                data: {
                    email: '',
                    password: ''
                }
            }
        }
    }
</script>

<style scoped>
    body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        position: relative;

    }
#app{
    background-color: #094179;
}
    .login {
        border: 1px solid #094179;
        border-radius: 5px;
        padding: 17px;
        width: 400px;
        position: absolute;
        top: 40%;
        left: 40%;
    }
    .login h2{
        text-align: center;
    }
</style>