<script lang="ts">
    import { defineComponent } from 'vue'
    import DropdownComponentVue from '../DropdownComponent.vue'
    import LoginButtonVue from '../LoginButton.vue'
    import LogoComponentVue from '../LogoComponent.vue'

    export default defineComponent({
        name: 'HeaderTemplate',
        components: { LogoComponentVue, LoginButtonVue, DropdownComponentVue }, 
        data() {
            return {
                token: null
            }
        }, 
        methods: {
            checkToken() {
                this.token = window.localStorage.getItem('token')
            }
        }, 
        mounted() {
            this.checkToken()
        }
    })
</script>

<template> 
    <header class="headerContainer">
         <div class="logo">
            <LogoComponentVue />
        </div>
        <div class="menuContainer">
            <LoginButtonVue v-if="!token"/>
            <DropdownComponentVue v-if="token" />
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
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menuContainer {
        width: auto;
        height: 100%;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
