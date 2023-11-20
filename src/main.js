import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from './store/store.ts'
createApp(App).mount('#app').use(pinia)
