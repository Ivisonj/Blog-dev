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

    interface ArticleTypes {
        id: string
        title: string
        description: string
        createdAt: string
        imageUrl: string
        category: string
        author: string
        userId: string
        content: string 
    }

    export default defineComponent({
        name: 'ArticlePage', 
        components: { HeaderTemplateVue, HeaderCategoryTemplateVue, ContentTemplateVue, FooterTemplateVue },
        data() {
            return {
                article: {} as ArticleTypes
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

            const formatedName = (name: string) => {
                if (!name) {
                    return '';
                }
                let parts = name.split(' ')
                return parts[0] + ' ' + parts[1]
            }
            
            return {
                capitalizeFirstLetter,
                formatedName 
            }
        }
    })
</script>

<template>
  <main class="articlePageContainer">
        <HeaderTemplateVue />
        <HeaderCategoryTemplateVue />
        <ContentTemplateVue>
            <div class="articlePage">
                <div class="articlePageContent">
                    <div class="articleInfor">
                        <h3 class="articleCategory">{{ article.category ? `Categoria: ${capitalizeFirstLetter(article.category)}` : '' }}</h3>
                        <h1 class="articleTitle">{{ article.title }}</h1>
                        <div class="articleAutorContainer">
                            <h3 class="createdAt">{{ article.createdAt }}</h3>
                            <p class="author">{{ `Publicado por ${formatedName(article.author)}` }}</p>
                        </div>
                    </div>
                    <div class="imageContainer">
                        <img class="articleImage" :src="article.imageUrl" alt="img">
                    </div>
                    <div class="articalContent" v-html="article.content"/>
                </div>
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

    .articlePageContainer .articlePage {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
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
        width: 80%;
        height: auto;
        margin: 20px 0px 0px 0px;
        display: flex;
        flex-direction: column;
    }

    .articleInfor .articleCategory {
        font-family: sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    .articleInfor .articleTitle {
        font-family: sans-serif;
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .articleAutorContainer {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .author {
        width: 50%;
        display: flex;
        justify-content: flex-end;
    }

    .articleInfor .createdAt {
        font-family: sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    .articlePageContent .imageContainer {
        width: 100%;
        height: 400px;
        padding: 30px 0px;
    }

    .imageContainer .articleImage {
        width: 100%;
        height: 100%;
    }

    .articlePageContent .articalContent {
        width: 80%;
        height: 300px;
        margin: 0px 0px 40px 0px;
    }

     @media screen and (max-width: 500px) {
        .articlePageContent .articleInfor {
            width: 95%;
        }
        .articleInfor .articleTitle {
            font-size: 1.8rem;
        }
        .articlePageContent .imageContainer {
            height: 300px;
        }
        .articlePageContainer .articlePageContent {
            width: 100%;
            padding: 0px 3px;
        }
        .articlePageContent .articalContent {
            width: 95%;
        }
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
