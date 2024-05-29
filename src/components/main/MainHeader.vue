<template>
    <div class="bg-back-color text-white pb-1 h-20">
        <header class="px-4 lg:px-6 h-20 flex items-center pt-4 pb-2">
            <button class="whitespace-nowrap rounded-3xl text-lg px-2 py-1 flex items-center justify-center">
                <RouterLink to="/">
                    <img src="../../../public/faviconLogo.ico" alt="Logo" class="logoImg" />
                    <span class="sr-only">Home</span>
                </RouterLink>
            </button>

            <button v-if="!loginState"
                class="inline-flex items-center justify-center font-bold whitespace-nowrap text-lg h-10 px-4 py-2 ml-auto">
                <RouterLink to="/login">Login</RouterLink>
            </button>

            <button v-if="!loginState"
                class="inline-flex items-center justify-center font-bold whitespace-nowrap text-lg h-10 px-4 py-2">
                <RouterLink to="/join">Join</RouterLink>
            </button>
            <button v-if="loginState"
                class="inline-flex items-center justify-center font-bold whitespace-nowrap text-lg h-10 px-4 py-2 ml-auto">
                <RouterLink to="/">Logout</RouterLink>
            </button>
            <button class="inline-flex items-center justify-center font-bold whitespace-nowrap text-lg h-10 px-4 py-2">
                <RouterLink to="/community">Community</RouterLink>
            </button>
        </header>
    </div>
</template>

<script setup>
import { userAuth } from '../../stores/userAuth'

const auth = userAuth();
const loginState = auth.loginState;
</script>


<style lang="scss" scoped>
/* Header 버튼 css*/
.logoImg {
    width: auto;
    height: auto;
}

header button:nth-child(1) {
    transition: all 0.3s ease;
    padding-bottom: 10px;
}

header button:nth-child(1):hover {
    background-color: #dae2d6;
    /* 마우스를 올렸을 때의 버튼 색 */
    transform: scale(1.1);
    /* 마우스를 올렸을 때의 버튼 크기 */
}

/* 2번째, 3번째 버튼에 대한 CSS */
header button:nth-child(2),
header button:nth-child(3),
header button:nth-child(4) {
    border: #2c3e50;
    border-radius: 1.5rem;
    transition: all 0.3s ease;
}

header button:nth-child(2):hover,
header button:nth-child(3):hover,
header button:nth-child(4):hover {
    border-radius: 1.5rem;
    background-color: #dae2d6;
    transform: scale(1.1);
}

header button:nth-child(2):active,
header button:nth-child(3):active,
header button:nth-child(4):active {
    color: #2c3e50;
    /* 버튼을 클릭했을 때의 글자색 */
}
</style>