<template>
  <div>
    <MainHeader />
    <RouterView />
  </div>
</template>

<script setup>
import MainHeader from './views/MainHeader.vue'
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
.logoImg {
  width: auto;
  height: auto;
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
header button:nth-child(3),
header button:nth-child(4) {
  border: #2c3e50;
  border-radius: 1.5rem;
  transition: all 0.3s ease;
}

header button:nth-child(2):hover,
header button:nth-child(3):hover,
header button:nth-child(4):hover {
  border-radius: 1.5rem;
  background-color: #dae2d6;
  transform: scale(1.1);
}

header button:nth-child(2):active,
header button:nth-child(3):active,
header button:nth-child(4):active {
  color: #2c3e50; /* 버튼을 클릭했을 때의 글자색 */
}
</style>