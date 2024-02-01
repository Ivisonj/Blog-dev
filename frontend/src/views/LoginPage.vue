<script lang="ts">
    import { defineComponent } from "vue"
    import { useRouter } from "vue-router"
    
    import LoginForm from '../components/LoginForm.vue'

    export default defineComponent({
        name: 'LoginPage', 
        components: { LoginForm }, 
        setup() {
          const router = useRouter()

          const backTo = () => {
            router.push('/')
          }

          return {
            backTo
          }
        }
    })
</script>

<template>
  <main class="loginPage">
    <div class="backConatiner">
       <font-awesome-icon @click="backTo" icon="fa-arrow-left" class="arrowLeft"/>
    </div>
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
        background: linear-gradient(0deg, rgba(20,20,52,1) 0%, rgba(44,42,92,1) 50%, rgba(20,20,52,1) 100%);
    }

    .backConatiner {
      position: absolute;
      top: 0;
      width: 100%;
      height:  64px;
      display: flex;
      align-items: center;
      padding-left: 20px;
      background: transparent;
    }

    .arrowLeft {
      color: #fff;
      font-size: 1.5rem;
      cursor: pointer;
    }
</style>