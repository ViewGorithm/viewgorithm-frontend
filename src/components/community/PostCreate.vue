<template>
    <div class="modal-overay">
        <div class="modal-container">
            <QuillEditor theme="snow" />
        </div>
    </div>
</template>

<script setup>

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
    padding: 3%;
    margin-top: 20px;
    flex-flow: column wrap;
    align-content: flex-end;
    overflow: scroll;
}
</style>