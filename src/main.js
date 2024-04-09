
import './style.css';
import './assets/base.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// PrimeVue import
import PrimeVue from 'primevue/config';
import "primeicons/primeicons.css";
import Lara from '@/presets/lara';
import Button from 'primevue/button';
// PrimeVue Table
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const app = createApp(App)


app.use(createPinia())
app.use(router)

// PrimeVue use
app.use(PrimeVue, { unstyled: true, pt: Lara});
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Button', Button);

app.mount('#app')