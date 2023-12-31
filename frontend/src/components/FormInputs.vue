<script setup lang="ts">
    import { ref, defineProps } from 'vue'

    const props = defineProps({
        inputType: {
            type: String,
            default: 'text'
        }, 
        inputLabel: {
            label: String,
            default: 'E-mail' 
        }
    })

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
            :type="inputType" 
            v-model="inputValid" 
            @focus="isFocused = true" 
            @blur="isFocused = false"
        /> 
            
        <label 
            class="label" 
            :style="{top: updateLabelPosition()}" 
            htmlFor="inputField"
        >
            {{ inputLabel }}
        </label>        
    </div>
</template>
<style scoped>
    .inputContainer {
        position: relative;
        width: 100%;
        height: 52px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin: 20px 0px;
    }
    
    .input {
        width: 75%;
        height: 41px;
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