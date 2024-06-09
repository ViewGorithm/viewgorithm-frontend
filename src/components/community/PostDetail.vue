<template>
    <div class="modal-overlay">
        <div class="modal-container">
            <div class="modal-header">
                <h2>{{ selectedPost.title }}</h2>
                <button
                    class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-custom-color font-bold w-7 h-7 rounded-xl"
                    @click="closeModal">
                    &times;
                </button>
            </div>
            <section>
                <p>Created At: {{ formatDate(selectedPost.createdAt) }}</p>
                <p>Content</p>
                <div>Post Content</div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    selectedPost: {
        type: Object,
        required: true
    }
})

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('en-US', options)
}

const emit = defineEmits(['close-modal'])

const closeModal = () => {
    emit('close-modal')
}
</script>

<style lang="scss" scoped>
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
    padding: 3%;
    margin-top: 20px;
    flex-flow: column wrap;
    align-content: flex-start;
    overflow: scroll;
    justify-content: center;
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
</style>