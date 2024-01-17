<script lang="ts">
import { defineComponent } from 'vue'
import LogoComponentVue from '../LogoComponent.vue'

export default defineComponent({
    name: 'FooterTemplate', 
    components: { LogoComponentVue }
})
</script>

<template> 
    <footer class="footerContainer">
        <div class="leftCol">
            <LogoComponentVue />
            <p class="copyright">© 2024 Blog.Dev</p>
        </div>
    </footer>
</template>

<style scoped>
    .footerContainer {
        grid-area: footer;
        padding: 56px 50px;
        margin-top: 40px;
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