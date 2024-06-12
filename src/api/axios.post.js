import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VUE_APP_API_URL,
    timeout: 5000,
})
export async function getPosts() {
    try {
        const data = await instance.get('/user/post').then(res => res.data);
        return data;
    } catch (e) {
        console.error(e);
    }
}

export async function getPost(id) {
    try {
        const data = await instance.get(`/user/post/${id}`).then(res => res.data);
        return data;
    } catch (e) {
        console.error(e);
    }
}

export async function createPost(post) {
    try {
        await instance.post('/user/post/save', post)
    } catch (e) {
        console.error(e);
    }
}