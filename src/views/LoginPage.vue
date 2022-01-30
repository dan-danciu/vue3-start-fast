<template>
  <div>
    <p>You are on the login page</p>
    <button @click="auth.logIn()">Log in</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/auth'
const auth = useCounterStore()
</script>

<style scoped></style>
