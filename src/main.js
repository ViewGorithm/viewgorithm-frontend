
import './index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// PrimeVue import
import PrimeVue from 'primevue/config';
import "primeicons/primeicons.css";
// PrimeVue Table
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


const app = createApp(App)


app.use(createPinia())
app.use(router)

// PrimeVue use
app.use(PrimeVue, { unstyled: true });
app.component('DataTable', DataTable);
app.component('Column', Column);

app.mount('#app')