<script lang="ts">
    import { defineComponent } from "vue"   
    import LoginForm from '../components/LoginForm.vue'

    export default defineComponent({
        name: 'LoginPage', 
        components: { LoginForm }
    })
</script>

<template>
  <main class="loginPage">
    <LoginForm />
  </main>
</template>
<style scoped>
    .loginPage {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background: linear-gradient(0deg, rgba(36,32,73,1) 0%, rgba(44,42,92,1) 50%, rgba(36,32,73,1) 100%); */
        background: linear-gradient(0deg, rgba(20,20,52,1) 0%, rgba(44,42,92,1) 50%, rgba(20,20,52,1) 100%);
    }
</style>