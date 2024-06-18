<template>
  <div class="modal-overay">
    <div class="modal-container">
      <div class="modal-header">
        <h1 class="text-left text-4xl mx-1 my-5 font-mono">Create A Post</h1>
        <button
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-custom-color font-bold w-7 h-7 rounded-xl"
          @click="closeCreateModal">
          &times;
        </button>
      </div>
      <div class="modal-body">
        <input type="text" v-model="title" placeholder="Enter title"
          class="w-full p-2 border border-gray-300 rounded mb-4" />
      </div>
      <QuillEditor ref="content" theme="snow" toolBar="minimal" :style="{ width: 'auto', height: '65vh' }" />
      <button
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2"
        @click="create">
        Upload
      </button>
      <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Alert :message="resultText" :isVisible="resultText != ''" />
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import { instance } from '@/api/index-api';
import { userAuth } from '@/stores/userAuth'
import { ref } from 'vue';
import Alert from '@/components/customComponents/Alert.vue'

const emit = defineEmits(['close-create-modal'])
const closeCreateModal = () => {
  emit('close-create-modal')
}

const title = ref('')
const content = ref(null)

const resultText = ref('')

function create() {
  const auth = userAuth()
  if (auth.isLoggedIn) {
    instance.post('/user/post/save', {
      title: title.value,
      content: content.value.getText(),
      created_at: new Date()
    }).then((res) => {
      resultText.value = "Successfully uploaded!"
      setTimeout(() => {
        resultText.value = ''
        router.go(0)
      }, 1800)
    })
  } else {
    resultText.value = 'You need to login first. Or Please Check to Join Our Service.'
    setTimeout(() => {
      resultText.value = ''
    }, 1500)
  }
}
</script>

<style lang="scss">
.modal-overay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-container {
    background-color: white;
    top: 50%;
    left: 50%;
    padding: 20px;
    border-radius: 5px;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    width: 100%;
  }
}
</style>