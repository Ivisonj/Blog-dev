<script lang="ts">
    import { useRoute } from 'vue-router'
    import { defineComponent } from 'vue'
    import HeaderTemplateVue from '../components/template/HeaderTemplate.vue'
    import HeaderCategoryTemplateVue from '../components/template/HeaderCategoryTemplate.vue'
    import ContentTemplateVue from '../components/template/ContentTemplate.vue'
    import FooterTemplateVue from '../components/template/FooterTemplate.vue'
    import { baseUrl } from '../global'
    import { axiosAuth } from '../config/axiosConfig'
    import { format, parseISO } from 'date-fns'
    import { ptBR } from 'date-fns/locale'

    interface CardDataTypes {
        id: string
        title: string
        description: string
        createdAt: string
        imageUrl: string
        category?: string
        content?: string 
    }

    export default defineComponent({
        name: 'ArticlePage', 
        components: { HeaderTemplateVue, HeaderCategoryTemplateVue, ContentTemplateVue, FooterTemplateVue },
        data() {
            return {
                article: []
            }
        },
        methods: {
            loadArticle() {
                const router = useRoute()
                const url = `${baseUrl}/api/article/${router.params.id}`
                axiosAuth.get(url)
                    .then(res => {
                        res.data.createdAt = format(parseISO(res.data.createdAt), 'dd \'de\' MMMM, yyyy', { locale: ptBR })
                        this.article = res.data
                    })
                    .catch(err => console.error(err))
            }
        },
        mounted() {
            this.loadArticle()
        },
        setup() {
            const capitalizeFirstLetter = (str: string) => {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }

            return {
                capitalizeFirstLetter, 
            }
        }
    })
</script>

<template>
  <main class="articlePageContainer">
        <HeaderTemplateVue />
        <HeaderCategoryTemplateVue />
        <ContentTemplateVue>
            <div class="articlePageContent">
                <div class="articleInfor">
                    <h3 class="articleCategory">{{ article.category ? `Categoria: ${capitalizeFirstLetter(article.category)}` : '' }}</h3>
                    <h1 class="articleTitle">{{ article.title }}</h1>
                    <h3 class="createdAt">{{ article.createdAt }}</h3>
                </div>
                <div class="imageContainer">
                    <img class="articleImage" :src="article.imageUrl" alt="img">
                </div>
                <div class="articalContent" v-html="article.content"/>
            </div>
        </ContentTemplateVue>
        <FooterTemplateVue />
  </main>
</template>

<style>
    .articlePageContainer {
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

    .articlePageContainer .articlePageContent {
        width: 85%;
        height: auto;
        padding: 0px 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .articlePageContent .articleInfor {
        width: 75%;
        height: auto;
        margin: 50px 0px 30px 0px;
        display: flex;
        flex-direction: column;
    }

    .articleInfor .articleCategory {
        font-size: 1rem;
        font-weight: 400;
    }

    .articleInfor .articleTitle {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .articleInfor .createdAt {
        font-size: 1rem;
        font-weight: 400;
    }

    .articlePageContent .imageContainer {
        width: 100%;
        height: 450px;
        padding: 50px 0px;
    }

    .imageContainer .articleImage {
        width: 100%;
        height: 100%;
    }

    .articlePageContent .articalContent {
        width: 75%;
        height: 300px;
        margin: 30px 0px 40px 0px;
    }

    ul,
    ol {
        padding: 0 1rem;
    }

    h1,
    h2,
    h3 {
        line-height: 1.1;
    }

    code {
        background-color: rgba(#616161, 0.1);
        color: #616161;
    }

    pre {
        background: #0D0D0D;
        color: #FFF;
        font-family: 'JetBrainsMono', monospace;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
    }

    pre code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    blockquote {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0D0D0D, 0.1);
    }

    hr {
        border: none;
        border-top: 2px solid rgba(#0D0D0D, 0.1);
        margin: 2rem 0;
    }
</style>
