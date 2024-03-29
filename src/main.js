
import './index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import Button from 'primevue/button';


const app = createApp(App)

app.use(PrimeVue, { unstyled: true });
app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Button', Button);

app.mount('#app')