import axios from 'axios'
import VueCookies from "vue-cookies";
import router from '@/router';
import { userAuth } from '@/stores/userAuth';

// axios 기본 url
// 향후 환경변수로 변경 예정
axios.defaults.baseURL = 'http://localhost:8088';

//refresh api url
const REFRESH_URL = '/user/refresh';

//pinia store에서 가져온 userAuth 객체 초기화


/*
        요구사항
        1.로그인 요청 시 ->(http status 200) 토큰값 받음 -> 토큰값 쿠키에 저장
        2.http status 200이 아닌 경우 -> 에러메시지 출력, 로그인 실패 알림

        초기 로그인 메소드.
        유저가 처음 웹에 접속하고 회원가입이 된 상태이며 로그인을 시도했을 때 실행되는 메소드.
*/
export async function login(userId, password) {
    try {
        const auth = userAuth();
        const { data } = await axios.post('/user/login', { userId, password });
        auth.setToken(data);
        VueCookies.set("tokens", data, "7d");
        console.log(data);
        router.push({ name: 'main' });
    } catch (error) {
        console.log(error);
    }
}


//기존 쿠키 값을 변경하는 메소드
const updateCookieValue = (key, newValue) => {
    // 쿠키 값 업데이트
    VueCookies.set(key, newValue);
};


//401에러가 발생했을 때 refresh token을 재발급하는 메소드.
export const getRefreshToken = async () => {
    try {
        const { data } = await axios.post(REFRESH_URL);
        auth.setToken(data);
        updateCookieValue("tokens", data);
        return data;
    } catch (e) {
        console.error(e);
        VueCookies.remove("tokens");
    }
}


export async function logout() {
    const auth = userAuth();
    await axios.post('/logout');
    VueCookies.remove("tokens");
    auth.removeToken();
    auth.setLoggedIn(false);
    router.push({ name: 'main' });
}
/* 추후 refresh api 중복 요청 방지를 위한 로직 추가 */