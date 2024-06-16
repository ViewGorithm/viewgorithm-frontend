import { instance } from "./index-api";

export async function getCodes(algorithm){
    const algorithmName = (algorithm || '').split(' ')[0];
    const codes = await instance.get('/algorithm/'+algorithmName);
    return codes.data;
}