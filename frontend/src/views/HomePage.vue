<script setup lang="ts">
    import ArticleComponentVue from '../components/ArticleComponent.vue'
    import HeaderCategoryVue from '../components/HeaderCategory.vue'
    import HeaderComponentVue from '../components/HeaderComponent.vue'
</script>

<template>
    <div class="homeContainer">
        <HeaderComponentVue />
        <HeaderCategoryVue />
        <div class="categoryTitle">
            <h1 class="title">
                Web
            </h1>
            <h3 class="subtitle">
                Artigos sobre desenvolvimento Web
            </h3>
        </div>
        <div class="articlesContainer">
            <ArticleComponentVue />
        </div>
    </div>
</template>

<style scoped>
    .homeContainer {
        width: 100vw;
        height: 3000px;
    }

    .categoryTitle {
        width: 100%;
        height: auto;
        padding: 32px 24px;

    }

    .categoryTitle .title {
        font-size: 2.5rem;
        font-weight: bold;
    }

    .categoryTitle .subtitle {
        font: 1rem;
        font-weight: 100;
        margin-top: 10px;
    }

    .articlesContainer {
        width: 100%;
        height: auto;
        padding: 24px;
    }
</style>