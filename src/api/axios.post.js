import { instance } from "./index-api";

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