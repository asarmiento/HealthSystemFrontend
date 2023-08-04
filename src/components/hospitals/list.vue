<template>
    <DataTable id="tablaDrivers" class="display">
        <thead>
        <tr>
            <th>Nombre</th>
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