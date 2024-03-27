<template>
  <div>
    <div class="bg-back-color text-white pb-1 h-20">
      <header class="px-4 lg:px-6 h-20 flex items-center pt-4 pb-2">
        <button class="whitespace-nowrap rounded-3xl text-lg px-2 py-1 flex items-center justify-center">
          <RouterLink to="/">
            <img src="../public/viewLOGO.ico" alt="Logo" class="logoImg">
            <span class="sr-only">Home</span>
          </RouterLink>
        </button>
        <button
          class="inline-flex items-center justify-center font-bold whitespace-nowrap text-lg h-10 px-4 py-2 ml-auto">
          <RouterLink to="/login">Login</RouterLink>
        </button>
        <button class="inline-flex items-center justify-center font-bold whitespace-nowrap text-lg h-10 px-4 py-2">
          <RouterLink to="/join">Join</RouterLink>
        </button>
      </header>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

/* Header 버튼 css*/
.logoImg{
    width: 70px;
    height: 70px;
}

header button:nth-child(1) {
    transition: all 0.3s ease;
    padding-bottom: 10px;
}
header button:nth-child(1):hover {
    background-color: #dae2d6; /* 마우스를 올렸을 때의 버튼 색 */
    transform: scale(1.1); /* 마우스를 올렸을 때의 버튼 크기 */
}

/* 2번째, 3번째 버튼에 대한 CSS */
header button:nth-child(2),
header button:nth-child(3) {
  border: #2c3e50;
  border-radius: 1.5rem;
    transition: all 0.3s ease;
}

header button:nth-child(2):hover,
header button:nth-child(3):hover {
    border-radius: 1.5rem;
    background-color: #dae2d6; /* 마우스를 올렸을 때의 버튼 색 */
    transform: scale(1.1); /* 마우스를 올렸을 때의 버튼 크기 */
}

header button:nth-child(2):active,
header button:nth-child(3):active {
    color: #daf4eb; /* 버튼을 클릭했을 때의 글자색 */
}

</style>