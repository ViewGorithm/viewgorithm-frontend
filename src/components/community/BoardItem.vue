<template>
  <div class="board-item" @click="showModal = true">
    <div class="item-header">
      <h2>{{ post.title }}</h2>
      <p class="meta">create date: {{ post.createdAt }} | author: {{ post.author }}</p>
    </div>
    <p class="content-preview">{{ contentPreview }}</p>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const contentPreview = computed(() => props.post.content.slice(0, 100) + '...');
</script>

<style scoped>
.board-item {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  cursor: pointer;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.item-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}

.item-header h2 {
  color: #2c3e50;
  font-size: 24px;
  margin-right: 20px;
}

.item-header .meta {
  color: #888;
  font-size: 14px;
}

.content-preview {
  color: #22333B;
  line-height: 1.5;
}
</style>
