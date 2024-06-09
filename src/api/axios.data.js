import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8088';

export async function getCodes(algorithm){
    const algorithmName = (algorithm || '').split(' ')[0];
    const codes = await axios.get('/algorithm/'+algorithmName);
    return codes.data;
}