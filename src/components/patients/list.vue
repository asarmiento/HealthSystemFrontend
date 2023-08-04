<template>
    <DataTable id="tablaDrivers" class="display">
        <thead>
        <tr>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>celular</th>
            <th>Email</th>
            <th>Identificacion del Hospital</th>
        </tr>
        </thead>
    </DataTable>
</template>

<script>
    import DataTable from 'datatables.net-vue3'
    import DataTablesCore from 'datatables.net';
    export default {
        name: "list",
        components:{DataTable,DataTablesCore},

    }
</script>

<style scoped>

</style>