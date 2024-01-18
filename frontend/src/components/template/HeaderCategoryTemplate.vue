<script lang="ts">
    import { defineComponent } from 'vue'
    import { useSelectCategory } from '../../stores/selectCategory'
    import CategoryButtonVue from '../CategoryButton.vue'
    import { useRouter } from 'vue-router'
    import CategoryButtonDropdownVue from '../CategoryButtonDropdown.vue'

    export default defineComponent({
        name: 'HeaderCategoryTemplate', 
        components: { CategoryButtonVue, CategoryButtonDropdownVue },
        setup() {
            const router = useRouter()
            const selectCategory = useSelectCategory()

            const handleWebClick = () => {
                selectCategory.setSelectedCategory('web')
                router.push('/')
            }

            const handleMobileClick = () => {
                selectCategory.setSelectedCategory('mobile')
                router.push('/')
            }

            const handledesktopClick = () => {
                selectCategory.setSelectedCategory('desktop')
                router.push('/')
            }

            const handleAiClick = () => {
                selectCategory.setSelectedCategory('ai')
                router.push('/')
            }

            return {
                handleWebClick,
                handleMobileClick,
                handledesktopClick,
                handleAiClick
            }
        }
    })

</script>

<template> 
    <header class="categoryHeaderContainer">
        <CategoryButtonDropdownVue />
        <div class="titleContainer">
            <h1 class="title">Categorias</h1>
        </div>
        <div class="categoryButtonContainer">
            <CategoryButtonVue :buttonChildren="'Web'" :click="handleWebClick"/>
            <CategoryButtonVue :buttonChildren="'Mobile'" :click="handleMobileClick"/>
            <CategoryButtonVue :buttonChildren="'Desktop'" :click="handledesktopClick"/>
            <CategoryButtonVue :buttonChildren="'AI'" :click="handleAiClick"/>
        </div>
    </header>
</template>

<style scoped>
    .categoryHeaderContainer {
        grid-area: headerCategory;
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
    }

    .categoryHeaderContainer .titleContainer {
        width: auto;
        height: 100%;
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .titleContainer .title {
        font-size: 1.5rem;
        font-weight: 600;
    }
    
    .categoryButtonContainer {
        width: auto;
        height: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

     @media screen and (max-width: 430px) {
        .titleContainer {
            display: none;
        }
        .title {
            display: none;
        }
        .categoryButtonContainer {
            display: none;
        }
    }
</style> 