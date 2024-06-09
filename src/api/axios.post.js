import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8088';

export async function getPosts(){
    try{
        const data = await axios.get('/user/post').then(res => res.data);
        return data;
    }catch(e){
        console.error(e);
    }
}

export async function getPost(id){
    try{
        const data = await axios.get(`/user/post/${id}`).then(res => res.data);
        return data;
    }catch(e){
        console.error(e);
    }
}

export async function createPost(post){
    try{
        await axios.post('/user/post', post).then(res => console.log(res.status), console.error);
    }catch(e){
        console.error(e);
    }
}