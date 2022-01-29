import { defineStore } from 'pinia'
import router from '../router'

export const useCounterStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    logIn() {
      this.isAuthenticated = true
      router.push({ name: 'home' })
    },
    logOut() {
      this.isAuthenticated = false
      router.push({ name: 'login' })
    },
  },
})
