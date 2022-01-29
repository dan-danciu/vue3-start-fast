<script setup>
import { useCounterStore } from '@/stores/auth'
const auth = useCounterStore()
</script>

<template>
  <nav v-if="$route.name !== 'login'">
    <ul class="nav-contents">
      <li class="nav-item">
        <router-link class="link" to="login">Login</router-link>
        <button class="button" @click="auth.logOut()">Log out</button>
      </li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button {
  margin: 50px;
}

.nav-contents {
  list-style-type: none;
  padding: 0;
  & .nav-item .link {
    text-decoration: none;
    color: red;
  }
}
</style>
