<template>
    <table id="tablaVehicles" class="display table dataTable">
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="vehicle in dataVehicles">
            <td>{{vehicle.name}}</td>
            <td>{{vehicle.email}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "list",
        data(){
            return{
                dataVehicles:[]
            }
        },
        mounted(){
          this.table()
          this.getDataVehicles()
            this.$store.dispatch('tryVehiclesAction')
            this.dataVehicles = this.$store.getters.listVehiclesGetters
            console.log(this.dataVehicles)
        },
        methods:{

            getDataVehicles(){
              this.$store.dispatch('getVehiclesAction')
            },
            table(){
                this.$nextTick(() => {
                    $('#tablaVehicles').dataTable({
                        "order": [[ 0, "desc" ]],
                        responsive: true,
                        dom: '<"table-buttons"B>flrt<bottam>ip',
                        buttons: [
                            {
                                text: 'Registrar Vehiculos',
                                action: function ( dt ) {
                                    document.location = '/registrar-Vehiculos'
                                },
                                "titleAttr":"Registrar Vehiculos",
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