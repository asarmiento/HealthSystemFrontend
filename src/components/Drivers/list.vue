<template>
    <table id="tablaDrivers" class="display table dataTable">
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in dataDrivers">
            <td>{{driver.name}}</td>
            <td>{{driver.email}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "list",
        data(){
            return{:
                dataUsers
            }
        },[]
        mounted(){
          this.table()
          this.getDataUsers()
            this.$store.dispatch('tryDriversAction')
            this.dataUsers = this.$store.getters.listDriversGetters
            console.log(this.dataDrivers)
        },
        methods:{

            getDataDrivers(){
              this.$store.dispatch('getDriversAction')
            },
            table(){
                this.$nextTick(() => {
                    $('#tablaDrivers').dataTable({
                        "order": [[ 0, "desc" ]],
                        responsive: true,
                        dom: '<"table-buttons"B>flrt<bottam>ip',
                        buttons: [
                            {
                                text: 'Registrar Condiutores',
                                action: function ( dt ) {
                                    document.location = '/registrar-Conductores'
                                },
                                "titleAttr":"Registrar Conductores",
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