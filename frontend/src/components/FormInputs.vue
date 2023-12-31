<script setup lang="ts">
    import { ref } from 'vue'

    const inputValid = ref('')
    const isFocused = ref(false)

    const updateLabelPosition = () => {
        return (inputValid.value || isFocused.value) ? '0px' : '20px'
    }
</script>

<template>
    <div class="inputContainer">
        <input 
            class="input" 
            type="text" 
            v-model="inputValid" 
            @focus="isFocused = true" 
            @blur="isFocused = false"
        /> 
            
        <label 
            class="label" 
            :style="{top: updateLabelPosition()}" 
            htmlFor="inputField"
        >
            E-mail
        </label>        
    </div>
</template>
<style scoped>
    .inputContainer {
        position: relative;
        width: 100%;
        height: 48px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    
    .input {
        width: 75%;
        height: 35px;
        font-size: 16px;
        color: #000;
    }
    
    .label {
        position: absolute;
        left: 55px;  
        transition: 0.5s;
        background-color: #fff;
    }
</style>