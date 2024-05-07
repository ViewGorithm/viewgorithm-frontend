<template>
  <div class="modal-overay">
    <div class="modal-container">
      <div class="modal-header">
        <h1 class="text-left text-4xl mx-1 my-5 font-mono">Create A Post</h1>
        <button
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-custom-color font-bold w-7 h-7 rounded-xl"
          @click="closeCreateModal"
        >
          &times;
        </button>
      </div>
      <QuillEditor theme="snow" toolbar="minimal" />
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2">
        Upload
      </button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close-create-modal'])

const closeCreateModal = () => {
  emit('close-create-modal')
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