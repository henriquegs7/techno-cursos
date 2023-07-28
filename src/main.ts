import './assets/base.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import LoadingComp from '@/components/LoadingComp.vue'

const app = createApp(App)

app.use(router)
app.component('LoadingComp', LoadingComp)

app.mount('#app')
