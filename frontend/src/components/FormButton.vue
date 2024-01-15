<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'FormButton', 
        props: {
                buttonChildren: String,
        }
    })
</script>

<template>
    <div class="buttonContainer">
        <button class="button" type="submit">
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