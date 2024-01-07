<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LogoComponent'
})
</script>

<template> 
    <a href="/" style="textDecoration: none">
        <h1 class="logoTitle">
            Blog<span class="logoTitle2">.Dev</span>
        </h1>
    </a>
</template>
<style scoped>
    .logoTitle {
        font-size: 2rem;
        font-weight: 400;
        color: #fff;
    }

    .logoTitle2 {
        font-size: 1rem;
        font-weight: 400;
        color: #9c81b6;
    }
</style>