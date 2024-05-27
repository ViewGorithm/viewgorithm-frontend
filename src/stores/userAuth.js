import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import VueCookies from "vue-cookies";

axios.defaults.baseURL = 'http://localhost:8088';

export const userAuth = defineStore({
    id: 'userAuth',
    state: () => ({
        token: ref(''),
        loginState : ref(false)
    }),
    getters: {
        getToken() {
            return state.token.value
        },
        isLoggedIn() {
            return state.token.value !== ''
        }
    },
    actions: {
        /*
        요구사항
        1.로그인 요청 시 ->(http status 200) 토큰값 받음 -> 토큰값 쿠키에 저장
        2.http status 200이 아닌 경우 -> 에러메시지 출력
        */
        async login(userId, password) {
            try {
                const { data } = await axios.post('/user/login', { userId, password });
                this.$state.token = data.token;
                VueCookies.set("token", data.token, "7d");
                this.$state.loginState = true;
                console.log(data.token);
            } catch (error) {
                console.log('login error', error);
            }
        },
        async logout() {
            state.token.value = ''
            VueCookies.remove("token");
            await axios.post('/user/logout');
            this.loginState = false;
        }
    }
})