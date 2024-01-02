<script setup lang="ts">
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const navToLogin = () => {
        router.push('/login')
    }
</script>

<template> 
    <button class="loginButton" @click="navToLogin">
        Login
    </button>
</template>

<style scoped>
    .loginButton {
        width: 73px;
        height: 40px;
        border-radius: 40%;
        border: none;
        font-size: 1rem;
        background-color: #fff;
        cursor: pointer;
    }

    .loginButton:hover {
        background-color: #eae8eb;
        transition: 0.5s;
    }
</style>