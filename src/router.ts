
import { createRouter, createWebHistory } from 'vue-router'
import HomePageVue from '../src/components/HomePage.vue'
import DisplayDataVue from '../src/components/DisplayData.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePageVue
    },
    {
        path: '/data',
        name: 'DisplayData',
        component: DisplayDataVue
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router