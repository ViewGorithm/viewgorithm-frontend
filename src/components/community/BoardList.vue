<template>
  <div class="board-list">
    <BoardItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BoardItem from './BoardItem.vue';

const posts = ref([
  {
    id: 1,
    title: 'Post Title',
    createdAt: '2023-03-28',
    author: 'jin yong',
    content: 'Post Content'
  },
  // 더 많은 게시글 데이터...
]);
</script>