import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HospitalsList from '../views/Hospitals/hospitalsLists.vue'
import HospitalsEdit from '../views/Hospitals/hospitalsEdit.vue'
import HospitalsCreate from '../views/Hospitals/hospitalCreate.vue'

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
