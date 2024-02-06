<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import HeaderTemplateVue from '../components/template/HeaderTemplate.vue'
    import HeaderCategoryTemplateVue from '../components/template/HeaderCategoryTemplate.vue'
    import ContentTemplateVue from '../components/template/ContentTemplate.vue'
    import FooterTemplateVue from '../components/template/FooterTemplate.vue'
    import { useSelectCategory } from '../stores/selectCategory'
    import MyArticleCardVue from '../components/MyArticleCard.vue'
    import { baseUrl, showError } from '../global'
    import { axiosAuth } from '../config/axiosConfig'
    import { format, parseISO } from 'date-fns'
    import { ptBR } from 'date-fns/locale'

    export default defineComponent({
        name: 'MyArticlesPage', 
        components: { HeaderTemplateVue, HeaderCategoryTemplateVue, ContentTemplateVue, FooterTemplateVue, MyArticleCardVue }, 
        setup() {
            const articles = ref([])
            const selectCategory = useSelectCategory()
 
            const loadArticles = () => {
                const userId = window.localStorage.getItem('userId')
                const url = `${baseUrl}/api/my-articles/${userId}`
                axiosAuth.get(url)
                    .then(res => {
                        articles.value = res.data
                    })
                    .catch(showError)
            }

            const formatDate = (date: string) => {
                return format(parseISO(date), 'dd \'de\' MMMM, yyyy', { locale: ptBR })
            }

            const capitalizeFirstLetter = (string) => {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

            const filterByCategory = () => {
                return articles.value.filter(item => item.category === selectCategory.selectedCategory)
            }

            return {
                articles,
                loadArticles,
                capitalizeFirstLetter,
                selectCategory, 
                filterByCategory, 
                formatDate, 
            }
        },
        mounted() {
            this.loadArticles()
        }
    })
</script>

<template>
    <main class="homeContainer">
        <HeaderTemplateVue />
        <HeaderCategoryTemplateVue />
        <ContentTemplateVue>
            <div class="categoryTitle">
                <h1 class="title">
                    Meus Artigos
                </h1>
                <h3 class="subtitle" v-if="filterByCategory().length > 0">
                    {{ `Artigos sobre desenvolvimento ${capitalizeFirstLetter(selectCategory.selectedCategory)}` }}
                </h3>
                <h3 class="subtitle" v-else>
                    {{ `Oooops... Você ainda não possui artigos sobre ${capitalizeFirstLetter(selectCategory.selectedCategory)}.` }}
                </h3>
            </div>
             <div class="articlesContainer">
                    <MyArticleCardVue 
                        v-for="card in filterByCategory()" 
                        :key="card.id" 
                        :id="card.id"
                        :title="card.title"
                        :description="card.description"
                        :imageUrl="card.imageUrl"
                        :createdAt="formatDate(card.createdAt)"
                        :category="card.category"
                    />
            </div>
        </ContentTemplateVue>
        <FooterTemplateVue />
    </main>
</template>

<style scoped>
    .homeContainer {
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

    .categoryTitle {
        width: 100%;
        height: auto;
        padding: 32px 24px;

    }

    .categoryTitle .title {
        font-family: sans-serif;
        font-size: 2.5rem;
        font-weight: bold;
    }

    .categoryTitle .subtitle {
        font-family: sans-serif;
        font: 1rem;
        font-weight: 100;
        margin-top: 10px;
    }

    .articlesContainer {
        width: 100%;
        height: auto;
        padding: 24px;
        display: flex;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 1050px) {
        .articlesContainer {
            padding: 10px;
        }
    }   
</style>