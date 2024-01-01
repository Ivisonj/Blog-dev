<script setup lang="ts">
    import HeaderCategoryVue from '../components/HeaderCategory.vue'
    import HeaderComponentVue from '../components/HeaderComponent.vue'
    
</script>

<template>
    <main>
        <div class="homeContainer">
            <HeaderComponentVue />
            <HeaderCategoryVue />
        </div>
  </main>
</template>

<style scoped>
    .homeContainer {
        width: 100vw;
        height: 3000px;
    }
</style>