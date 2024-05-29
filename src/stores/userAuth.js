import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userAuth = defineStore({
    id: 'userAuth',
    state: () => ({
        accessToken: '',
        refreshToken: '',
        loginState: false,
        isLoggedIn: ref(false),
    }),
    getters: {
        getAccessToken() {
            return state.accessToken.value
        },
        getRefreshToken() {
            return state.refreshToken.value
        },
        getLoginState() {
            return state.loginState.value
        }
    },
    actions: {
        setToken(tokens) {
            this.accessToken = tokens.accessToken;
            this.refreshToken = tokens.refreshToken;
            this.loginState = true;
        },
        setLoggedIn(value) {
            this.isLoggedIn = value;
        }
    },
    persist: {
        enabled: true
    }
})