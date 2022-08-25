import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index';
import {store,key}from './stroe'; 

const app = createApp(App)
app
.use(router)
.use(store,key)
.mount('#app')
