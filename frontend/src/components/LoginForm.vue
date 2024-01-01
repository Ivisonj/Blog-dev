<script setup lang="ts">
  import FormInputsVue from "./FormInputs.vue"
  import FormButtonVue from "./FormButton.vue"
  import { useSelectForm } from '../stores/selectForm'

  const selectForm = useSelectForm()

  const handleSignupClick = () => {
    selectForm.setCurrentForm('1')
  }

  const handleLoginClick = () => {
    selectForm.setCurrentForm('2')
  }
</script>

<template>
    <div class="mainContainer">
      <div class="signupContainer" @click="handleSignupClick">
        <h1 
          class="signupTitle"
          :style="{'font-size': selectForm.currentForm === '1' ? '1.5rem' : '0.9rem'}"
        >
          Sign Up
        </h1>
        <form class="loginForm">
          <FormInputsVue :inputType="'text'" :inputLabel="'E-mail'"/>
          <FormInputsVue :inputType="'password'" :inputLabel="'Senha'"/>
          <FormButtonVue :buttonChildren="'Login'" :buttonType="submit"/>
        </form>
      </div>
      <div 
        class="loginContainer" 
        @click="handleLoginClick"
        :style="{top: selectForm.currentForm === '1' ? '385px' : '70px'}"
      >
        <h1 
          class="loginTitle"
          :style="{'font-size': selectForm.currentForm === '2' ? '1.5rem' : '0.9rem'}"
        >
          Login
        </h1>
        <form class="loginForm">
          <FormInputsVue :inputType="'text'" :inputLabel="'E-mail'"/>
          <FormInputsVue :inputType="'password'" :inputLabel="'Senha'"/>
          <FormButtonVue :buttonChildren="'Login'" :buttonType="submit"/>
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
    height: 90%;
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
  } 
</style>