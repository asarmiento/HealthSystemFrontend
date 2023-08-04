<template>
    <DataTable id="tablaDrivers" class="display">
        <thead>
        <tr>
            <th>Fecha</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Camilla</th>
            <th>Compañia</th>
            <th>Id del paciente</th>
            <th>idetificacion del conductor</th>
            <th>idetificacion del vehículo</th>
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