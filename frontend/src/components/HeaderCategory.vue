<script setup lang="ts">
    import CategoryButtonVue from './CategoryButton.vue'
    import { useSelectCategory } from '../stores/selectCategory'

    const selectCategory = useSelectCategory()

    const handleWebClick = () => {
        selectCategory.setSelectedCategory('web')
    }

    const handleMobileClick = () => {
        selectCategory.setSelectedCategory('mobile')
    }

    const handledesktopClick = () => {
        selectCategory.setSelectedCategory('desktop')
    }

    const handleAiClick = () => {
        selectCategory.setSelectedCategory('ai')
    }
</script>

<template> 
    <div class="categoryHeaderContainer">
        <div class="titleContainer">
            <h1 class="title">Categorias</h1>
        </div>
        <div class="categoryButtonContainer">
            <CategoryButtonVue :buttonChildren="'Web'" :click="handleWebClick"/>
            <CategoryButtonVue :buttonChildren="'Mobile'" :click="handleMobileClick"/>
            <CategoryButtonVue :buttonChildren="'Desktop'" :click="handledesktopClick"/>
            <CategoryButtonVue :buttonChildren="'AI'" :click="handleAiClick"/>
        </div>
    </div>
</template>
<style scoped>
    .categoryHeaderContainer {
        position: sticky;
        top: 0;
        width: 100%;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
    }

    .categoryHeaderContainer .titleContainer {
        width: auto;
        height: 100%;
        margin-left: 50px;
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
</style>