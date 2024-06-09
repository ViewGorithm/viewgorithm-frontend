import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8088';

export async function getPosts(){
    try{
        const {data} = await axios.get('/user/post');
        return data;
    }catch(e){
        console.error(e);
    }
}