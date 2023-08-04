<<template>
    <table id="tablaVehicles" class="display">
        <thead>
        <tr>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Tipo_completo</th>
            <th>Año</th>
            <th>Hospital</th>
        </tr>
        </thead>
    </table>
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
                    $('#tablaVehicles').dataTable({
                        "order": [[ 0, "desc" ]],
                        responsive: true,
                        dom: '<"table-buttons"B>flrt<bottam>ip',
                        buttons: [
                            {
                                text: 'Registrar Vehiculo',
                                action: function ( dt ) {
                                    document.location = '/registrar-conductores'
                                },
                                "titleAttr":"Registrar Conductor",
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