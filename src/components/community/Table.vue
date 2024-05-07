<template>
    <div class="container px-4 mx-auto">
        <div class="overflow-x-auto">
            <table class="table-fixed w-full">
                <thead>
                    <tr>
                        <th class="px-4 py-2">ID</th>
                        <th class="px-4 py-2">Title</th>
                        <th class="px-4 py-2">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in paginatedPosts" :key="post.id" @click="showPostDetail(post)">
                        <td class="border px-4 py-2">{{ post.id }}</td>
                        <td class="border px-4 py-2">{{ post.title }}</td>
                        <td class="border px-4 py-2">{{ formatDate(post.createdAt) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-center mt-4">
            <nav aria-label="Pagination">
                <ul class="flex list-none">
                    <li>
                        <button
                            class="h-10 px-5 text-back-color transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100 "
                            :disabled="currentPage === 1" @click="prevPage">
                            Prev
                        </button>
                    </li>
                    <li v-for="pageNumber in totalPages" :key="pageNumber">
                        <button
                            class="h-10 px-5 text-back-color transition-colors duration-300 bg-white focus:shadow-outline hover:bg-indigo-100 active:text-3xl"
                            :class="{ 'bg-indigo-600 text-black': pageNumber === currentPage }"
                            @click="changePage(pageNumber)">
                            {{ pageNumber }}
                        </button>
                    </li>
                    <li>
                        <button
                            class="h-10 px-5 text-back-color transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
                            :disabled="currentPage === totalPages" @click="nextPage">
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="mt-5">
            <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                @click="showCreate">
                Create
            </button>
        </div>
    </div>
    <PostCreate v-if="showCreateModal" @close-create-modal="closeCreateModal" />
    <PostDetail v-if="selectedPost" :selectedPost="selectedPost" @close-modal="closeModal" />
</template>

<script setup>
import { ref, computed } from 'vue'
import PostDetail from './PostDetail.vue';
import PostCreate from './PostCreate.vue';

// 임시 데이터 (실제로는 API 또는 데이터베이스에서 가져옴)
// 실제 구현 시 최신순으로 가져올 것.
const posts = ref([
    { id: 1, title: 'Post 1', createdAt: new Date(2023, 3, 1) },
    { id: 2, title: 'Post 2', createdAt: new Date(2023, 3, 2) },
    { id: 3, title: 'Post 3', createdAt: new Date(2023, 3, 3) },
    { id: 4, title: 'Post 4', createdAt: new Date(2023, 3, 4) },
    { id: 5, title: 'Post 5', createdAt: new Date(2023, 3, 5) },
    { id: 6, title: 'Post 6', createdAt: new Date(2023, 3, 6) },
    { id: 7, title: 'Post 7', createdAt: new Date(2023, 3, 7) },
    { id: 8, title: 'Post 8', createdAt: new Date(2023, 3, 8) },
    { id: 9, title: 'Post 9', createdAt: new Date(2023, 3, 9) },
    { id: 10, title: 'Post 10', createdAt: new Date(2023, 3, 10) },
    { id: 11, title: 'Post 11', createdAt: new Date(2023, 3, 11) },
    { id: 12, title: 'Post 12', createdAt: new Date(2023, 3, 12) },
])

const currentPage = ref(1)
const pageSize = 5
const selectedPost = ref(null)
const showCreateModal = ref(false)

const paginatedPosts = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize
    const endIndex = startIndex + pageSize
    return posts.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => Math.ceil(posts.value.length / pageSize))

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
    }
}

const changePage = (pageNumber) => {
    currentPage.value = pageNumber
}

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('en-US', options)
}

const showPostDetail = (post) => {
    selectedPost.value = post
}

const closeModal = () => {
    selectedPost.value = null
}

const showCreate = () => {
    showCreateModal.value = true
}

const closeCreateModal = () => {
    showCreateModal.value = false
}
</script>

<style>
.container {
    margin-top: 3%;
    margin-bottom: 3%;
}
</style>