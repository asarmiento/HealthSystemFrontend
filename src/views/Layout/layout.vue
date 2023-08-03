<template>
    <div class=" bg-health">
        <header>
            Hola Mundo
        </header>

        <section class="bg-body" style="background-color: blue">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
            <slot></slot>
        </section>
    </div>

</template>

<script>
    export default {
        name: "layout"
    }
</script>

<style scoped>

</style>