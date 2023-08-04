import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import JQuery from 'jquery'
import VueAxios from 'vue-axios'
import DataTable from 'datatables.net-vue3';
import Select from 'datatables.net-select';

const app = createApp(App)

app.use(store)
app.use(VueAxios, axios)
app.use(router)
app.use(DataTable,Select)
app.use(JQuery)
//app.component("v-select", VueSelect)
DataTable.use(Select);
axios.defaults.headers.common.Accept='application/json';
axios.defaults.baseURL ='http://healthsystem.test/api';

app.mount('#app')
