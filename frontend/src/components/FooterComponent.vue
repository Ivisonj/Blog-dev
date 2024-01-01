<script setup lang="ts">
    import LogoComponentVue from "./LogoComponent.vue"
</script>

<template> 
    <div class="footerContainer">
        <div class="leftCol">
            <LogoComponentVue />
            <p class="copyright">© 2024 Blog.Dev</p>
        </div>
    </div>
</template>
<style scoped>
    .footerContainer {
        width: 100%;
        height: 300px;
        padding: 56px 50px;
        background-color: #141434;
    }

    .footerContainer .leftCol {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .copyright {
        font-size: 1rem; 
        color: #ffffff;
    }
</style>