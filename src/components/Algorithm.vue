<template>
    <div class="modal-container">
        <div class="modal-header">
            <h2 class="m-header-title" v-if="data">Algorithm : {{ data }}</h2>
            <h2 class="m-header-title" v-else> No Data Selected</h2>
            <button class="close-button" @click="$emit('close-modal')">
                &times;
            </button>
        </div>
        <div class="h-auto w-auto">
            < 앞으로 알고리즘 애니메이션을 보여주는 공간.>
        </div>
        <div class="comment-section">
            <div class="comments">
                <div v-for="comment in comments" :key="comment.id" class="comment">
                    <div class="comment-header">
                        <span class="comment-author">{{ comment.author }}</span>
                    </div>
                    <p class="comment-text">{{ comment.text }}</p>
                </div>
            </div>
            <div class="comment-input">
                <input v-model="newComment.text" placeholder="댓글 입력..." @keyup.enter="addComment">
                <input v-model="newComment.author" placeholder="이름">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Algorithm',
    data() {
        return {
            showModalCom: true,
            comments: [
                { id: 1, author: '사용자1', text: '첫 번째 댓글' },
                { id: 2, author: '사용자2', text: '두 번째 댓글' },
            ],
            newComment: { text: '', author: '' },
        }
    },
    components: {
    },
    props: {
        data: String,
    },
    methods: {
        addComment() {
            if (this.newComment.text.trim() !== '' && this.newComment.author.trim() !== '') {
                const newCommentObj = {
                    id: this.comments.length + 1,
                    author: this.newComment.author.trim(),
                    text: this.newComment.text.trim(),
                }
                this.comments.push(newCommentObj)
                this.newComment = { text: '', author: '' }
            }
        }
    }
}
</script>

<style scoped>
.modal-container {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 20px;
    width: 80%;
    margin-top: 20px;
    flex-flow: column wrap;
    align-content: flex-end;
}

/* 모달 헤더 */
.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    width: 100%;
}

.close-button {
    flex-shrink: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 5px;
}

.m-header-title {
    flex-shrink: 1;
    flex-grow: 1;
    margin-right: 10px;
    word-wrap: break-word;
    font-size: x-large;
    font-weight: bold;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}

/* 댓글 */
.comment-section {
    margin-top: 20px;
    width: 100%;
}

.comments {
    max-height: 150px;
    overflow-y: auto;
}

.comment {
    padding: 10px;
    background-color: #daf4eb;
    border-radius: 4px;
    margin-bottom: 10px;
}

.comment-input {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    margin-top: 10px;
}

.comment-input input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 5px;
}

.comment-input > :nth-child(1) {
    flex-grow: 1;
}

.comment-input > :nth-child(2) {
    flex-grow: 0;
    flex-basis: 200px;
}

.comment-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}

.comment-author {
    font-weight: bold;
}

/* 새로운 CSS 코드 */
.comment-text {
    font-size: 10pt;
}
</style>