import { userAuth } from '@/stores/userAuth';
import axios from 'axios'
import { ref } from 'vue';

axios.defaults.baseURL = 'http://localhost:8088';

export async function getPosts() {
    try {
        const data = await axios.get('/user/post').then(res => res.data);
        return data;
    } catch (e) {
        console.error(e);
    }
}

export async function getPost(id) {
    try {
        const data = await axios.get(`/user/post/${id}`).then(res => res.data);
        return data;
    } catch (e) {
        console.error(e);
    }
}

export async function createPost(post) {
    try {
        await axios.post('/user/post/save', post)
    } catch (e) {
        console.error(e);
    }
}