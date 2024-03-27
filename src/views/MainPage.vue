<template>
    <div class="all flex flex-col min-h-[100dvh]">
        <div class="flex-wrap bg-back-color text-white">
            <h1 class="text-6xl font-bold">ViewGorithm</h1>
            <p class="text-lg mt-4 pb-4">You Can VIEW The Process of ALGORITHMS.</p>
        </div>
        <div class="flex flex-row mb-5 mt-14 bg-white pt-10 pb-10">
            <div class="header-under text-4xl font-bold">
                Welcome to ViewGorithm!
            </div>
            <div class="vertical-line ml-2 mr-1"></div>
            <div class="header-under font-mono mr-2 ml-1">
                ViewGorithm provides a useful service for everyone who want to check the process of an algorithm.
                With ViewGorithm, you can check the process of an algorithm with the animation.
                Choose the algorithm you want check.
            </div>
        </div>
        <main class="flex-1 flex flex-col items-center justify-center bg-section-color">
            <section class="flex flex-col flex-nowrap">
                <h1 class="list-title">Algorithm List</h1>
                <div>
                    Click the button down below and have an opportunity to check the process of an algorithm.
                </div>
                <div class="list-wrap flex flex-row flex-wrap gap-4">
                    <div class="lists" v-for="name in algorithms" :key="name"
                        @click="sendDataTo(name), showModal = true">
                        {{ name }}
                    </div>
                </div>
            </section>
        </main>
        <main class="bg-main-color">
            <Posts />
        </main>
        <footer class="flex flex-col gap-2 sm:flex-row py-2 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <span class=" text-sm font-bold">ViewGorithm</span>
        </footer>
    </div>
    <Algorithm v-if="showModal" :data="selectedData" @close-modal="closeModal" class="modal-overlay" />
</template>

<script>
import Algorithm from '../components/Algorithm.vue';
import Posts from '../components/Posts.vue';
export default {
    name: 'MainPage',
    data() {
        return {
            algorithms: ['Bubble sort', 'Merge Sort', 'Quick Sort'],
            selectedData: null,
            showModal: false
        }
    },
    components: {
        Algorithm,
        Posts
    },
    methods: {
        sendDataTo(name) {
            this.selectedData = name;
        },
        closeModal() {
            this.showModal = false;
        },
    }
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

/* component 태그 영역 */
.modal-overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>