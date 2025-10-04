import 'nprogress/nprogress.css'
import './assets/nprogress.css'
import '@splidejs/vue-splide/css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueSplide)

app.mount('#app')
