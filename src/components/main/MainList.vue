<template>
    <main class="flex-1 flex flex-col items-center justify-center bg-section-color">
            <section class="flex flex-col flex-nowrap">
                <h1 class="list-title">Algorithm List</h1>
                <div>
                    Click the button down below and have an opportunity to check the process of an algorithm.
                </div>
                <div class="list-wrap flex flex-row flex-wrap gap-4">
                    <div class="lists" v-for="name in algorithms" :key="name"
                        @click="sendDataTo(name)">
                        {{ name }}
                    </div>
                </div>
            </section>
        </main>
</template>

<script setup>
import { ref } from 'vue';

const algorithms = ref(['Bubble sort', 'Merge Sort', 'Quick Sort']);
const emit = defineEmits(['selectedAlgorithm', 'toggleModal']);

const sendDataTo = (name) => {
    emit('selectedAlgorithm', name);
    emit('toggleModal', true); // 모달 열기
};
</script>

<style scoped>

</style>