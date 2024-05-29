<template>
  <div>
    <MainHeader />
    <RouterView />
  </div>
</template>

<script setup>
import { userAuth } from './stores/userAuth'
import MainHeader from './components/main/MainHeader.vue';

const auth = userAuth();
const loginState = auth.loginState;
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

</style>