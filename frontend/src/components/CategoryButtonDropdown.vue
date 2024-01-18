<script lang="ts">
    import { useRouter } from 'vue-router'
    import { defineComponent } from 'vue'
    import { useSelectCategory } from '../stores/selectCategory'

    export default defineComponent({
        name: 'CategoryButtonDropdown',
        setup() {
            const router = useRouter()
            const selectCategory = useSelectCategory()

            const handleWebClick = () => {
                selectCategory.setSelectedCategory('web')
            }

            const handleMobileClick = () => {
                selectCategory.setSelectedCategory('mobile')
            }

            const handleDesktopClick = () => {
                selectCategory.setSelectedCategory('desktop')
            }

            const handleAiClick = () => {
                selectCategory.setSelectedCategory('ai')
            }

            const logout = () => {
                window.localStorage.removeItem('token')
                router.push('/')
                if(router.currentRoute.value.path === '/') {
                    window.location.reload()
                }
            }


            return {
                logout, 
                handleWebClick, 
                handleMobileClick, 
                handleDesktopClick,  
                handleAiClick, 
            }
        }
    })
</script>

<template> 
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><div @click="handleWebClick" class="dropdown-item">Web</div></li>
            <li><div @click="handleMobileClick" class="dropdown-item">Mobile</div></li>
            <li><div @click="handleDesktopClick" class="dropdown-item">Desktop</div></li>
            <li><div @click="handleAiClick" class="dropdown-item">Ai</div></li>
        </ul>
    </div>
</template>

<style scoped>
    .btn-secondary.dropdown-toggle {
        background-color: #fff;
        color: #000;
        margin-left: 10px;
        border: none;
    }

    .dropdown-item {
        cursor: pointer;
    }

    .dropdown-menu {
        width: 100%;
    }

    @media screen and (min-width: 432px) {
        .dropdown {
            display: none;
        }
    }
</style>