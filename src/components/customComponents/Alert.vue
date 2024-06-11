<template>
    <div class="alert bg-green-500 text-white text-3xl opacity-83 transition-opacity duration-600 p-5 mb-15 rounded-2xl" v-if="isVisible">
        {{ message }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    message: {
        type: String,
        required: true
    },
    isVisible: {
        type: Boolean,
        default: true
    }
})
</script>

<style scoped>
.alert {
    margin-bottom: 15px;
}
</style>
