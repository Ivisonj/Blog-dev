<script setup lang="ts">
    import { ref, defineProps } from 'vue'
</script>

<template>
    <div class="container">
        <button class="button" type="button">
            Entrar
        </button>
    </div>
</template>
<style scoped>
    .container {
        width: 100%;
        height: auto;
        padding: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: none;
        background-color: #fff;
    }

    .button {
        width: 75%;
        height: 41px;
        border-radius: 5px;
        background-color: #5a418c;
        cursor: pointer;
    }
</style>