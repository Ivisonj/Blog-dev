<script setup lang="ts">
    import { ref, defineProps } from 'vue'

    const props = defineProps({
        buttonChildren: String,
        buttonType: {
            type: String,
            default:'button'
        },
        // handleClick: Function
    })
</script>

<template>
    <div class="buttonContainer">
        <button class="button" :type="buttonType">
            {{ buttonChildren }}
        </button>
    </div>
</template>
<style scoped>
    .buttonContainer {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button {
        width: 75%;
        height: 41px;
        border-radius: 8px;
        border: none;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        background-color: #5a418c;
        cursor: pointer; 
    }

    .button:hover {
        background-color: #2c2a5c;
        box-shadow: 0 0 10px 0 #9c81b6 inset, 0 0 10px 4px #9c81b6;
        transition: 0.5s;
    }

    .button:active {
        transform: translateY(3px)
    }
</style>