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
    export default {
        name: "list",
        mounted(){
          this.table()
        },
        methods:{
            table(){
                this.$nextTick(() => {
                    $('#tablaTransfers').dataTable({
                        "order": [[ 0, "desc" ]],
                        responsive: true,
                        dom: '<"table-buttons"B>flrt<bottam>ip',
                        buttons: [
                            {
                                text: 'Registrar Transferencias',
                                action: function ( dt ) {
                                    document.location = '/registrar-Transferencias'
                                },
                                "titleAttr":"Registrar Transferencias",
                                "className": "btn btn-primary ml-5"
                            }
                        ],
                        "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
                        "language": {
                            "processing": "Procesando...",
                            "lengthMenu": "Desplegar _MENU_ líneas por páginas",
                            "search": "Buscar",
                            searchPlaceholder: "Buscar aquí",
                            "zeroRecords": "No se encontraron resultados",
                            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
                            "infoEmpty": "No records available",
                            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                            "loadingRecords": "Cargando...",
                            "paginate": {
                                "first": "Primero",
                                "last": "Último",
                                "next": "Siguiente",
                                "previous": "Anterior"
                            }},
                        paginate:[

                        ]
                    });
                })
            }
        }
    }
</script>

<style scoped>

</style>