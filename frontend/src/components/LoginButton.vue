<script lang="ts">
    import { useRouter } from 'vue-router'
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'LoginButton',
        setup() {
            const router = useRouter()

            const navToLogin = () => {
                router.push('/login')
            }

            return {
                navToLogin
            }
        }
    })
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