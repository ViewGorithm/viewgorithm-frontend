<template>
  <div class="com mx-auto mt-9 bg-back-color">
    <BoardList />
    <Pagination />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import BoardList from '../components/community/BoardList.vue';
import Pagination from '../components/community/Pagination.vue';
</script>

<style>
.com {
  max-width: 800px;
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>