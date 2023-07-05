import './style.css'

import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Rover from './Rover.vue'
import Console from './Console.vue'

const routes = [
    {path: '/', component: Rover},
    {path: '/console', component: Console},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
