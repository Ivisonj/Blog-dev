<script lang="ts">
    import { defineComponent } from 'vue'
    import HeaderTemplateVue from '../components/template/HeaderTemplate.vue'
    import ContentTemplateVue from '../components/template/ContentTemplate.vue'
    import FooterTemplateVue from '../components/template/FooterTemplate.vue'
    import ArticleFormVue from '../components/ArticleForm.vue'

    export default defineComponent({
        name: 'CreateArticlePage', 
        components: { HeaderTemplateVue, ContentTemplateVue, FooterTemplateVue, ArticleFormVue },
    })
</script>

<template>
  <main class="createArticlePage">
        <HeaderTemplateVue />
        <ContentTemplateVue>
            <div class="content">
                <h1 class="title">Crie o seu artigo agora!</h1>
                <ArticleFormVue />
            </div>
        </ContentTemplateVue>
        <FooterTemplateVue />
  </main>
</template>
<style scoped>
    .createArticlePage {
        height: 100vh;
        display: grid;
        grid-template-rows: 64px 1fr 300px;
        grid-template-columns: 1fr;
        grid-template-areas: 
            "header"
            "content"
            "footer"
        ;
    }

    .createArticlePage .content {
        width: 100%;
        height: auto;
        padding: 20px 50px;
    }

    .createArticlePage .title {
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 30px;
    }

</style>