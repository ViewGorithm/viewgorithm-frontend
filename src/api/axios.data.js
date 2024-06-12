import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VUE_APP_API_URL,
    timeout: 3000,
})

export async function getCodes(algorithm){
    const algorithmName = (algorithm || '').split(' ')[0];
    const codes = await instance.get('/algorithm/'+algorithmName);
    return codes.data;
}