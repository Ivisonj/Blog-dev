<script setup lang="ts">
  import FormInputsVue from "./FormInputs.vue"
  import FormButtonVue from "./FormButton.vue"
</script>

<template>
  <main>
    <div class="container">
        <h1 class="signupTitle">Sign Up</h1>
        <div class="internalContainer">
          <h1 class="loginTitle">Login</h1>
          <form class="loginForm">
            <FormInputsVue :inputType="'text'" :inputLabel="'E-mail'"/>
            <FormInputsVue :inputType="'password'" :inputLabel="'Senha'"/>
            <FormButtonVue />
          </form>
        </div>
    </div>
  </main>
</template>
<style scoped>
  .container {
    position: relative;
    width: 350px;
    height: 450px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    background-color: #2c2a5c;
    cursor: pointer;
  }

  .internalContainer {
    position: absolute;
    top: 90px;
    width: 190%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }

  .signupTitle {
    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
  }

  .loginTitle {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c2a5c;
  }

  .loginForm {
    width: 350px;
    height: 310px;
  }

  /*  */
 
</style>