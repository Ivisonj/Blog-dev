<script setup lang="ts">
     import { defineProps, Fragment } from 'vue'

     const props = defineProps({
        buttonChildren: String, 
        buttonType: {
            type: String,
            default:'button'
        },
        click: Function        
     })
</script>

<template> 
    <button class="categoryButton" :type="buttonType" @click="click">
        {{ buttonChildren }}
    </button>
</template>
<style scoped>
    .categoryButton {
        width: 90px;
        height: 100%;
        border: none;
        font-size: 1rem;
        background-color: #fff;
        cursor: pointer;
        transition: 0.5s;
    }

    .categoryButton:hover {
        background-color: #eae8eb;
    }
</style>