<script lang="ts">
    import { defineComponent } from 'vue'
    import HeaderTemplateVue from '../components/template/HeaderTemplate.vue'
    import HeaderCategoryTemplateVue from '../components/template/HeaderCategoryTemplate.vue'
    import ContentTemplateVue from '../components/template/ContentTemplate.vue'
    import FooterTemplateVue from '../components/template/FooterTemplate.vue'
    import TipTapComponentVue from '../components/TipTapComponent.vue'
    import FormButtonVue from '../components/FormButton.vue'

    export default defineComponent({
        name: 'CreateArticlePage', 
        components: { HeaderTemplateVue, HeaderCategoryTemplateVue, ContentTemplateVue, FooterTemplateVue, TipTapComponentVue, FormButtonVue },
    })
</script>

<template>
  <main class="createArticlePage">
        <HeaderTemplateVue />
        <HeaderCategoryTemplateVue />
        <ContentTemplateVue>
            <div class="content">
                <h1 class="title">Crie o seu artigo agora!</h1>
                <form action="">
                    <div class="w-75 mb-2 mt-3">
                        <label for="InputTitle" class="form-label">Título</label>
                        <input type="text" class="form-control" id="InputTitle" placeholder="Digite um título...">
                    </div>
                    <div class="w-75 mb-2 mt-3">
                        <label for="InputDescription" class="form-label">Descrição</label>
                        <input type="text" class="form-control" id="InputDescription" placeholder="Digite uma descrição...">
                    </div>
                    <div class="w-75 mb-2 mt-3">
                        <label for="InputImageUrl" class="form-label">Imagem (URL)</label>
                        <input type="text" class="form-control" id="InputImageUrl" placeholder="Url da imagem...">
                    </div>
                    <div class="w-75 mb-2 mt-3">
                        <label for="InputCategory" class="form-label">Categoria</label>
                        <select class="form-select" id="InputCategory" aria-label="Default select example">
                            <option selected>Selecione a categoria do seu artigo</option>
                            <option value="web">Web</option>
                            <option value="mobile">Mobile</option>
                            <option value="desktop">Desktop</option>
                            <option value="ai">Ai</option>
                        </select>
                    </div>
                    <div class="w-75 mb-2 mt-4">
                        <label for="InputContent" class="form-label">Conteúdo</label>
                        <TipTapComponentVue />
                    </div>
                    <div class="w-75 mb-2 mt-5">
                        <FormButtonVue :buttonChildren="'CRIAR'" :buttonType="submit" />
                    </div>
                </form>
            </div>
        </ContentTemplateVue>
        <FooterTemplateVue />
  </main>
</template>
<style scoped>
    .createArticlePage {
        height: 100vh;
        display: grid;
        grid-template-rows: 64px 64px 1fr 300px;
        grid-template-columns: 1fr;
        grid-template-areas: 
            "header"
            "headerCategory"
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

    #InputTitle:focus {
        border-color: purple !important;
     }

    #InputDescription:focus {
        border-color: purple !important;
     }

    #InputImageUrl:focus {
        border-color: purple !important;
     }

    #InputCategory:focus {
        border-color: purple !important;
     }
</style>