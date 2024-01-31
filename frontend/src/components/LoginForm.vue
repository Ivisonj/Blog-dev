<script lang="ts">
  import FormButtonVue from "./FormButton.vue"
  import { useSelectForm } from '../stores/selectForm'
  import { defineComponent } from "vue"
  import axios from 'axios'
  import { baseUrl, showSuccess, showError } from '../global'
  import { useRouter } from 'vue-router'
  
  export default defineComponent({
    name: 'LoginForm', 
    components: { FormButtonVue },
    data: function() {
      return {
        user: {
          name: '', 
          email: '', 
          password: ''
        }, 
        login: {
          email: '', 
          password: ''
        }
      }
    },
    methods: {
      registerUser() {
        const url = `${baseUrl}/api/user/register`
        const selectForm = useSelectForm()
        axios.post(url, this.user)
          .then(res => {
            showSuccess(res.data)
            selectForm.setCurrentForm('2')
          })
          .catch(showError)
      },  
      loginUser() {
         const url = `${baseUrl}/api/user/login`
         axios.post(url, this.login)
           .then(res => {
              window.localStorage.setItem('token', res.data.token)
              window.localStorage.setItem('userId', res.data.userId)
              this.router.push('/')
          })
          .catch(showError)
      }
    },
    setup() {
      const router = useRouter()
      const selectForm = useSelectForm()

      const handleSignupClick = () => {
        selectForm.setCurrentForm('1')
      }

      const handleLoginClick = () => {
        selectForm.setCurrentForm('2')
      }

      return {
        handleSignupClick, 
        handleLoginClick, 
        selectForm, 
        router
      }
    }
  })
</script>

<template>
    <div class="mainContainer">
      <div class="signupContainer" @click="handleSignupClick">
        <h1 
          class="signupTitle"
          :style="{'font-size': selectForm.currentForm === '1' ? '1.5rem' : '0.9rem'}"
        >
          Cadastrar
        </h1>
        <form class="loginForm" @submit.prevent="registerUser">
          <div class="w-75 mb-2 mt-3">
            <label for="InputName" class="form-label text-white">Nome</label>
            <input v-model="user.name" type="text" class="form-control" id="InputName" placeholder="Digite o seu nome completo...">
          </div>
          <div class="w-75 mb-2">
            <label for="InputEmail" class="form-label text-white">E-mail</label>
            <input v-model="user.email" type="email" class="form-control" id="InputEmail" placeholder="Digite o seu E-mail...">
          </div>
          <div class="w-75 mb-4">
            <label for="InputPassword" class="form-label text-white">Senha</label>
            <input v-model="user.password" type="password" class="form-control" id="InputPassword" placeholder="Digite a sua senha...">
          </div>
          <FormButtonVue :buttonChildren="'Cadastrar'" :buttonType="submit"/>
        </form>
      </div>
      <div 
        class="loginContainer" 
        @click="handleLoginClick"
        :style="{top: selectForm.currentForm === '1' ? '400px' : '68px'}"
      >
        <h1 
          class="loginTitle"
          :style="{'font-size': selectForm.currentForm === '2' ? '1.5rem' : '0.9rem'}"
        >
          Login
        </h1>
        <form class="loginForm" @submit.prevent="loginUser">
          <div class="w-75 mb-3 mt-3">
            <label for="InputEmail" class="form-label">E-mail</label>
            <input v-model="login.email" type="email" class="form-control" id="InputEmail" placeholder="Digite o seu E-mail...">
          </div>
          <div class="w-75 mb-4">
            <label for="InputPassword" class="form-label">Senha</label>
            <input v-model="login.password" type="password" class="form-control" id="InputPassword" placeholder="Digite a sua senha...">
          </div>
          <FormButtonVue :buttonChildren="'ENTRAR'" :buttonType="submit"/>
        </form>
      </div>
    </div>
</template>
<style scoped>
  .mainContainer {
    position: relative;
    width: 350px;
    height: 450px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  
  .signupContainer {
    width: 100%;
    height: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2c2a5c;
    cursor: pointer;
    z-index: 1;
  }

  .loginContainer {
    position: absolute;
    left: -150px;
    width: 185%;
    height: 95%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    z-index: 2;
    transition: 0.5s;
  }

  .signupTitle {
    margin-top: 5px;
    margin-bottom: 20px;
    color: #fff;
    font-weight: bold;
    transition: 0.5s;
  }

  .loginTitle {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c2a5c;
    transition: 0.5s;
  }

  .loginForm {
    width: 350px;
    height: 310px;
    display: flex;
    flex-direction: column;
    align-items: center;
  } 

  #InputEmail:focus {
    border-color: purple !important;
  }

  #InputPassword:focus {
    border-color: purple !important;
  }

  #InputName:focus {
    border-color: purple !important;
  }
</style>