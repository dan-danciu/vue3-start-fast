import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import { useCounterStore } from '@/stores/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      const auth = useCounterStore()
      if (!auth.isAuthenticated) next({ name: 'login' })
      else next()
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
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
