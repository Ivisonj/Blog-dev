<script setup lang="ts">
     import { ref, defineProps } from 'vue'

     const props = defineProps({
        buttonChildren: String, 
        buttonType: {
            type: String,
            default:'button'
        },        
     })
</script>

<template> 
    <button class="categoryButton" :type="buttonType">
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