<script setup lang="ts">
    import LoginButtonVue from "./LoginButton.vue"
    import LogoComponentVue from "./LogoComponent.vue"
</script>

<template>
    <div class="headerContainer">
        <div class="logo">
            <LogoComponentVue />
        </div>
        <div class="menuContainer">
            <LoginButtonVue />
        </div>
    </div>
</template>

<style scoped>
     .headerContainer {
        width: 100%;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 0px;
        background-color: #141434;
    }

    .logo {
        width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menuContainer {
        width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>