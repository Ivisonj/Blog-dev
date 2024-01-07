<script lang="ts">
    import { defineComponent } from 'vue'
    import FormButtonVue from './FormButton.vue'
    import TipTapComponentVue from './TipTapComponent.vue'

    export default defineComponent({
        name: 'ArticleForm', 
        components: { FormButtonVue, TipTapComponentVue }, 

    })
</script>

<template>
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
            <FormButtonVue :buttonChildren="'PUBLIAR ARTIGO'" :buttonType="submit" />
        </div>
    </form>
</template>
<style scoped>
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