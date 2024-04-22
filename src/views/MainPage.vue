<template>
    <div class="all flex flex-col min-h-[100dvh]">
        <MainTitle />
        <MainExplain />
        <MainList @selectedAlgorithm="handleSelectedAlgorithm" @toggleModal="toggleModal" />
        <MainFooter />
    </div>
    <Algorithm v-if="showModal" :data="selectedData" @close-modal="closeModal" @downModal="downModal" />
</template>

<script setup>
import MainList from '../components/main/MainList.vue';
import MainFooter from '../components/main/MainFooter.vue';
import MainTitle from '../components/main/MainTitle.vue';
import MainExplain from '../components/main/MainExplain.vue';

import Algorithm from '../components/algorithm/Algorithm.vue';

import { ref } from 'vue';

const selectedData = ref(null);
const showModal = ref(false);

const handleSelectedAlgorithm = (algorithmName) => {
  selectedData.value = algorithmName;
};

//handleSelectedAlgorithm과 toggleModal의 값을 받아 사용
const toggleModal = (value) => {
  showModal.value = value;
}

const downModal = (value) => {
  showModal.value = value;
}
</script>

<style>
/* header 아래 태그 영역 */
.header-under {
    flex-flow: row wrap;
    flex-basis: 50%;
    align-items: center;
    justify-items: center;

}

/* main 태그 영역 */
.vertical-line {
    border-left: 2px dashed #333;
    height: auto;
}

.list-title {
    font-size: 2.2rem;
    font-weight: bold;
    margin-top: 2rem;
}

.list-wrap {
    margin-top: 2rem;
    margin-bottom: 2rem;
    justify-content: center;
    align-items: center;
}

.lists {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.2rem;
    font-weight: bold;
    border: 3px solid #333;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
    width: 10rem;
    height: 12rem;
    margin: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    justify-content: flex-end;
}
</style>