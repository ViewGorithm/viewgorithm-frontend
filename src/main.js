
import './style.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueCodeHighlight from 'vue-code-highlight'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import VueCookies from "vue-cookies";

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(VueCookies, { expireTimes: "7d", secure: true })
app.use(VueCodeHighlight)
app.component('QuillEditor', QuillEditor)


app.mount('#app')