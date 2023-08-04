<template>
    <table id="tablaUsers" class="display table dataTable">
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in dataUsers">
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "list",
        data(){
            return{
                dataUsers:[]
            }
        },
        mounted(){
          this.table()
          this.getDataUsers()
            this.$store.dispatch('tryUsersAction')
            this.dataUsers = this.$store.getters.listUsersGetters
            console.log(this.dataUsers)
        },
        methods:{

            getDataUsers(){
              this.$store.dispatch('getUsersAction')
            },
            table(){
                this.$nextTick(() => {
                    $('#tablaUsers').dataTable({
                        "order": [[ 0, "desc" ]],
                        responsive: true,
                        dom: '<"table-buttons"B>flrt<bottam>ip',
                        buttons: [
                            {
                                text: 'Registrar Usuario',
                                action: function ( dt ) {
                                    document.location = '/registrar-Usuarios'
                                },
                                "titleAttr":"Registrar Usuarios",
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