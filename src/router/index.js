import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import { useCounterStore } from '@/stores/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      const auth = useCounterStore()
      if (!auth.isAuthenticated) next({ name: 'login' })
      else next()
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const auth = useCounterStore()
      if (auth.isAuthenticated) next({ name: 'home' })
      else next()
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
