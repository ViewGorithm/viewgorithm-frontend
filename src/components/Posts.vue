<template>
    <div class="board">

        <!-- 후에 pageable 구현 -->
        <h1>Board</h1>
        <div>Share your opinions, And Talk to another people!</div>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <span>{{ post.id }}</span>
                <span>{{ post.userId }}</span>
                <span>{{ post.title }}</span>
                <span>Read Contents</span>
                <div class="comment-container">
                    <input type="text" v-model="post.newComment" placeholder="Enter comment">
                    <button @click="addComment(post)">Add Comment</button>
                </div>
                <ul>
                    <li v-for="comment in post.comments" :key="comment.id">
                        <span>{{ comment.id }}</span>
                        <span>{{ comment.userId }}</span>
                        <span>{{ comment.content }}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="input-container">
            <input type="text" v-model="newPost.title" placeholder="Enter title">
            <textarea v-model="newPost.content" placeholder="Enter content"></textarea>
            <button @click="addPost">Add Post</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                { 
                    id: 1, 
                    userId: 'user1', 
                    title: 'title1', 
                    content: 'contents',
                    newComment: '',
                    comments: [
                        { id: 1, userId: 'user1', content: 'comment1' },
                    ]
                },
                { 
                    id: 2, 
                    userId: 'user2', 
                    title: 'title2', 
                    content: 'contents',
                    newComment: '',
                    comments: [
                        { id: 1, userId: 'user1', content: 'comment1' },
                    ]
                },
                { 
                    id: 3, 
                    userId: 'user3', 
                    title: 'title3', 
                    content: 'contents',
                    newComment: '',
                    comments: [
                        { id: 1, userId: 'user1', content: 'comment1' },
                    ]
                },
            ],
            newPost: {
                id: null,
                userId: null,
                title: '',
                content: '',
            },
        };
    },
    methods: {
        addPost() {
            this.newPost.id = this.posts.length + 1;
            this.newPost.userId = 'user4'; // Replace with actual user ID
            this.posts.push({
                ...this.newPost,
                newComment: '',
                comments: [],
            });
            this.newPost = {
                id: null,
                userId: null,
                title: '',
                content: '',
            };
        },
        addComment(post) {
            const newCommentId = post.comments.length + 1;
            post.comments.push({
                id: newCommentId,
                userId: 'user5', // Replace with actual user ID
                content: post.newComment,
            });
            post.newComment = '';
        },
    },
};
</script>

<style scoped>

/* 게시판, 게시글 관련 css */
.board {
    width: 80%;
    margin: auto;
    padding: 20px;
    border-radius: 5px;
}

.board h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
}

.board ul {
    list-style-type: none;
}

.board li {
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px 0;
    background-color: #c8fae6;
    margin: 5px;
}

.board li span {
    display: block;
    margin-bottom: 5px;
}

/* 댓글 관련 css */
.comment-container {
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
}

.comment-container input,
.comment-container button {
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.comment-container button {
    padding: 5px 10px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.comment-container button:hover {
    background-color: #daf4eb;
}

.input-container {
    margin-top: 20px;
}

.input-container input,
.input-container textarea {
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.input-container button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.input-container button:hover {
    background-color: #45a049;
}

</style>