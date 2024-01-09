<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import HeaderTemplateVue from '../components/template/HeaderTemplate.vue'
    import HeaderCategoryTemplateVue from '../components/template/HeaderCategoryTemplate.vue'
    import ContentTemplateVue from '../components/template/ContentTemplate.vue'
    import FooterTemplateVue from '../components/template/FooterTemplate.vue'
    import CardComponentVue from '../components/CardComponent.vue'
    import { useSelectCategory } from '../stores/selectCategory'
    import { axiosAuth } from '../config/axiosConfig'
    import { baseUrl } from '../global'

    interface CardDataTypes {
        id: string
        title: string
        description: string
        createdAt: string
        imageUrl: string
        category?: string
    }

    export default defineComponent({
        name: 'HomePage', 
        components: { HeaderTemplateVue, HeaderCategoryTemplateVue, ContentTemplateVue, FooterTemplateVue, CardComponentVue },
        setup() {
            const articles = ref([])
            const selectCategory = useSelectCategory()

            const loadArticles = () => {
                const url = `${baseUrl}/api/articles`
                axiosAuth.get(url)
                    .then(res => {
                        articles.value = res.data
                    })
                    .catch(err => console.error(err))
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
                filterByCategory
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
                    {{ capitalizeFirstLetter(selectCategory.selectedCategory) }}
                </h1>
                <h3 class="subtitle">
                    {{ `Artigos sobre desenvolvimento ${capitalizeFirstLetter(selectCategory.selectedCategory)}` }}
                </h3>
            </div>
             <div class="articlesContainer">
                <CardComponentVue 
                    v-for="card in filterByCategory()" 
                    :key="card.id" 
                    :title="card.title"
                    :description="card.description"
                    :imageUrl="card.imageUrl"
                    :createdAt="card.createdAt"
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
        display: flex;
        flex-wrap: wrap;
    }
</style>


    