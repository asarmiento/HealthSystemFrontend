import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import HospitalsList from '../views/Hospitals/hospitalsLists.vue'
import HospitalsEdit from '../views/Hospitals/hospitalsEdit.vue'
import HospitalsCreate from '../views/Hospitals/hospitalCreate.vue'
import UsersList from '../views/Users/usersLists.vue'
import UsersEdit from '../views/Users/usersEdit.vue'
import UsersCreate from '../views/Users/usersCreate.vue'
import VehiclesLists from '../views/vehicles/vehiclesLists.vue'
import VehiclesEdits from '../views/vehicles/vehiclesEdit.vue'
import VehiclesCreate from '../views/vehicles/vehiclesCreate.vue'
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
      path: '/login',
      name: 'Login',
      component: () => import('../views/login.vue'),
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {requiresAuth: true, sitemap:true}
    },
    {
      path: '/lista-de-hospitales',
      name: 'hospitals',
      component: HospitalsList,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/editar/:id/hospital',
      name: 'editHospital',
      component: HospitalsEdit,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/Registrar-Hospitales',
      name: 'createHospital',
      component: HospitalsCreate,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/lista-de-Usuarios',
      name: 'Users',
      component: UsersList,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/editar/:id/Usuario',
      name: 'editUser',
      component: UsersEdit,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
       path: '/registrar-Usuario',
      name: 'createUser',
      component: UsersCreate,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/lista-de-vehiculos',
      name: 'vehicles',
      component: VehiclesLists,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/editar/:id/vehiculos',
      name: 'editVehicle',
      component: VehiclesEdits,
      meta: {requiresAuth: true, sitemap:true}
    },
    {
      path: '/registrar-vehicle',
      name: 'createVehicle',
      component: VehiclesCreate,
      meta: {requiresAuth: true, sitemap:true}
    },
    {
      path: '/lista-de-conductores',
      name: 'Drivers',
      component:DriversList,
      meta: {requiresAuth: false, sitemap:true}
       
    },
    {
      path: '/editar/:id/conductores',
      name: 'editDrivers',
      component: DriversEdit,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/registrar-conductores',
      name: 'createDrivers',
      component:DriversCreate,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/lista-de-transferencias',
      name: 'Transfers',
      component: TransfersList,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/editar/:id/transferencias',
      name: 'editTransfers',
      component: TransfersEdit,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/registrar-transferencias',
      name: 'createTransfers',
      component: TransfersCreate,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/Lista-de-pacientes',
      name: 'Patients',
      component: PatientsList,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/editar/:id/pacientes',
      name: 'editPatients',
      component: PatientsEdit,
      meta: {requiresAuth: false, sitemap:true}
    },
    {
      path: '/Registrar-Pasientes',
      name: 'createPatients',
      component: PatientsCreate,
      meta: {requiresAuth: false, sitemap:true}
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
router.beforeEach((to, from, next) => {
    console.log(" to ", to.matched.some(route => route.meta.requiresAuth), " from ", from, ' store ', store.state.auth.loggedIn)
  if (to.matched.some(route => route.meta.requiresAuth)) {
        console.log(" to ", to.matched.some(route => route.meta.requiresAuth), " from ", from, ' store ', store.state.auth.loggedIn)

    if (!store.state.auth.loggedIn) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
