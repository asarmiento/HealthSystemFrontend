<template>
    <div class=" bg-health">
        <header>
            <section id="logo-page"></section>
            <section id="banner"><h1>Control de traslados C.C.S.S.</h1></section>

            <section id="logo-csss">
                </section>
        </header>
        <nav class="navbar" >
            <ul>
            <li><RouterLink to="/">Inicio</RouterLink></li>
                <li> <RouterLink to="/Lista-de-pacientes">Pacientes</RouterLink></li>
                <li> <RouterLink to="/lista-de-hospitales">Hospitales</RouterLink></li>
                <li> <RouterLink to="/lista-de-Usuarios">Usuarios</RouterLink></li>
                <li> <RouterLink to="/lista-de-vehiculos">Vehiculos</RouterLink></li>
                <li> <RouterLink to="/lista-de-conductores">Conductores</RouterLink></li>
                <li> <RouterLink to="/lista-de-transferencias">Traslados</RouterLink></li>

            </ul>
        </nav>
        <main class="bg-body" >
           <article>
<slot />
           </article>
        </main>
        <footer>
            <h5>@2023 Sistemas Amigables Latinoamérica S.A</h5><br>
            <h4>Desarrollado junto a estudiantes de pasantía</h4>
        </footer>
    </div>

</template>

<script>
    export default {
        name: "layout"
    }
</script>


<style lang="scss" scoped>

    @import "./../../assets/style.scss";
</style>