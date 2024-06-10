<template>
    <div class="modal-overlay">
        <div class="modal-container">
            <div class="modal-header">
                <h2 class="m-header-title" v-if="data">Algorithm : {{ data }}</h2>
                <h2 class="m-header-title" v-else>No Data Selected</h2>
                <button
                    class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-custom-color font-bold w-7 h-7 rounded-xl"
                    @click="sendButtonData()">
                    &times;
                </button>
            </div>
            <component :is="renderComponent" />
            <div class="pt-8">
                <Chart :time-complexity="algoCodes.time_complexity" />
            </div>
            <div>
                <Codes :codes="algoCodes" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Chart from './Chart.vue';
import Codes from './Codes.vue';
import BubbleSort from './visualize/BubbleSort.vue';
import MergeSort from './visualize/MergeSort.vue';
import QuickSort from './visualize/QuickSort.vue';
import { onBeforeMount, ref, computed } from 'vue';
import { getCodes } from '@/api/axios.data';
import QuickSortVue from './visualize/QuickSort.vue';

const emit = defineEmits(['toggleModal']);
const sendButtonData = () => {
    emit('downModal', false);
};
const props = defineProps({
    data: String,
});

const algoCodes = ref({});
onBeforeMount(async () => {
    algoCodes.value = await getCodes(props.data);
});

const renderComponent = computed(() => {
    switch (props.data) {
        case "Bubble Sort":
            return BubbleSort;
        case "Merge Sort":
            return MergeSort;
        case "Quick Sort":
            return QuickSort;
        // 다른 알고리즘 컴포넌트를 추가하려면 여기에 case 문을 추가하세요.
        default:
            return null;
    }
});
</script>

<style>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.modal-container {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    background: #fff;
    border-radius: 10px;
    padding: 2%;
    margin-top: 20px;
    flex-flow: column wrap;
    align-content: flex-end;
    overflow: scroll;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    width: 100%;
}

.m-header-title {
    flex-shrink: 1;
    flex-grow: 1;
    margin-right: 10px;
    word-wrap: break-word;
    font-size: xx-large;
    font-weight: bold;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
</style>