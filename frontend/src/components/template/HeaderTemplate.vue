<script lang="ts">
import { defineComponent } from 'vue'
import LoginButtonVue from '../LoginButton.vue'
import LogoComponentVue from '../LogoComponent.vue'

export default defineComponent({
    name: 'HeaderTemplate',
    components: { LogoComponentVue, LoginButtonVue }
})
</script>

<template> 
    <header class="headerContainer">
         <div class="logo">
            <LogoComponentVue />
        </div>
        <div class="menuContainer">
            <LoginButtonVue />
        </div>
    </header>
</template>

<style scoped>
    .headerContainer {
        grid-area: header;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 0px;
        background-color: #141434;
    }

    .logo {
        width: auto;
        height: 100%;
        margin-left: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menuContainer {
        width: auto;
        height: 100%;
        margin-right: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
