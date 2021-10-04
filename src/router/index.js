import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rebels',
    name: 'Rebels',
    component: () => import('../views/Rebels.vue')
  },
  {
    path: '/register/',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: () => import('../views/Update.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
