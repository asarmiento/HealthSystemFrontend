<template>
    <DataTable id="tablaVehicles" class="display">
        <thead>
        <tr>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Tipo_completo</th>
            <th>Año</th>
            <th>Hospital</th>
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