<script lang="ts">
    import { defineComponent } from 'vue'
    import { useRouter } from 'vue-router'
    import FormButtonVue from './FormButton.vue'
    import TipTapComponentVue from './TipTapComponent.vue'
    import { baseUrl, showError, showSuccess } from '../global'
    import { axiosAuth } from '../config/axiosConfig' 

    interface ArticleTypes {
        id: string
        title: string
        description: string
        createdAt: string
        imageUrl: string
        category: string
        content: string 
        author: string
        userId: string
    }

    export default defineComponent({
        name: 'ArticleForm', 
        components: { FormButtonVue, TipTapComponentVue },
        setup() {
            const router = useRouter()
            return { router }
        }, 
        data() {
            return {
                article: {
                    title: '',
                    description: '',
                    imageUrl: '', 
                    category: '', 
                    content: '', 
                    author: '',
                    userId: window.localStorage.getItem('userId'), 
                } as ArticleTypes, 
            }
        }, 
        methods: {
            updateContent(content) {
                this.article.content = content
            },
            saveArticle() {
                const url = `${baseUrl}/api/article/salve`
                axiosAuth.post(url, this.article)
                    .then(res => {
                        this.router.push('/')
                        showSuccess(res.data)
                    }) 
                    .catch(showError)
            },
            loadUser() {
                const userId = window.localStorage.getItem('userId')
                const url = `${baseUrl}/api/user/${userId}`
                axiosAuth.get(url)
                    .then(res => {
                        this.article.author = res.data.name
                    })
                    .catch(showError)
            }
        }, 
        mounted() {
            this.loadUser()
        }
    })
</script>

<template>
    <form @submit.prevent="saveArticle">
        <div class="w-100 mb-2 mt-3">
            <label for="InputTitle" class="form-label">Título</label>
            <input v-model="article.title" type="text" class="form-control" id="InputTitle" placeholder="Digite um título...">
        </div>
        <div class="w-100 mb-2 mt-3">
            <label for="InputDescription" class="form-label">Descrição</label>
            <input v-model="article.description" type="text" class="form-control" id="InputDescription" placeholder="Digite uma descrição...">
        </div>
        <div class="w-100 mb-2 mt-3">
            <label for="InputImageUrl" class="form-label">Imagem (URL)</label>
            <input v-model="article.imageUrl" type="text" class="form-control" id="InputImageUrl" placeholder="Url da imagem...">
        </div>
        <div class="w-100 mb-2 mt-3">
            <label for="InputCategory" class="form-label">Categoria</label>
            <select v-model="article.category" class="form-select" id="InputCategory" placeholder="Selecione uma categoria...">
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
                <option value="desktop">Desktop</option>
                <option value="ai">Ai</option>
            </select>
        </div> 
        <div class="w-100 mb-2 mt-4">
            <label for="InputContent" class="form-label">Conteúdo</label>
            <TipTapComponentVue @content-updated="updateContent" />
        </div>
        <div class="w-100 mb-2 mt-5">
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