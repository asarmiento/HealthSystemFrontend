import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HospitalsList from '../views/Hospitals/hospitalsLists.vue'
import HospitalsEdit from '../views/Hospitals/hospitalsEdit.vue'
import HospitalsCreate from '../views/Hospitals/hospitalCreate.vue'
import UsersList from '../views/Users/usersLists.vue'
import UsersEdit from '../views/Users/usersEdit.vue'
import UsersCreate from '../views/Users/userCreate.vue'
import VehiclesListsList from '../views/Vehicles/vehiclesLists.vue'
import VehiclesEditsEdit from '../views/Vehicles/vehiclesEdit.vue'
import VehiclesCreate from '../views/Vehicles/vehicleCreate.vue'
import DriversList from '../views/Drivers/DriversList.vue'
import DriversEdit from '../views/Drivers/DriversEdit.vue'
import DriversCreate from '../views/Drivers/DriversCreate.vue'
import TransfersList from '../views/Transfers/TransfersList.vue'
import TransfersEdit from '../views/Transfers/TransfersEdit.vue'
import TransfersCreate from '../views/Transfers/TransfersCreate.vue'
import PatientsList from '../views/Patients/PatientsList.vue'
import PatientsEdit from '../views/Patients/PatientsEdit.vue'
import PatientsCreate from '../views/Patients/PatientsCreate.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lista-de-hospitales',
      name: 'hospitals',
      component: HospitalsList
    },
    {
      path: '/editar/:id/hospital',
      name: 'editHospital',
      component: HospitalsEdit
    },
    {
      path: '/registrar-hospital',
      name: 'createHospital',
      component: HospitalsCreate
    },
    {
      path: '/lista-de-Usuarios',
      name: 'Users',
      component: UsersList
    },
    {
      path: '/editar/:id/Usuario',
      name: 'editUser',
      component: UsersListsEdit
    },
    {
       path: '/registrar-Usuario',
      name: 'createUser',
      component: UsersCreate
    },
    {
      path: '/lista-de-vehiculos',
      name: 'vehicles',
      component: VehiclesList
    },
    {
      path: '/editar/:id/vehiculos',
      name: 'editVehicle',
      component: VehiclesEdit
    },
    {
      path: '/registrar-vehicle',
      name: 'createVehicle',
      component: VehiclesCreatesCreate
    },
    {
      path: '/lista-de-conductores',
      name: 'Drivers',
      component:DriversList
       
    },
    {
      path: '/editar/:id/conductores',
      name: 'editDrivers',
      component: DriversEdit
    },
    {
      path: '/registrar-conductores',
      name: 'createDrivers',
      component:DriversCreate
    },
    {
      path: '/lista-de-transferencias',
      name: 'Transfers',
      component: TransfersList
    },
    {
      path: '/editar/:id/transferencias',
      name: 'editTransfers',
      component: TransfersEdit
    },
    {
      path: '/registrar-trasnferencias',
      name: 'createTransfers',
      component: TransfersCreate
    },
    {
      path: '/Lista-de-pacientes',
      name: 'Patients',
      component: PatientsList
    },
    {
      path: '/editar/:id/pacientes ',
      name: 'editPatients',
      component: PatientsEdit
    },
    {
      path: '/registro-de-pacientes',
      name: 'createPatients',
      component: PatientsCreate
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
