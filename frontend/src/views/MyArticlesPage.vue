<script lang="ts">
    import { defineComponent } from 'vue'
    import HeaderTemplateVue from '../components/template/HeaderTemplate.vue'
    import HeaderCategoryTemplateVue from '../components/template/HeaderCategoryTemplate.vue'
    import ContentTemplateVue from '../components/template/ContentTemplate.vue'
    import FooterTemplateVue from '../components/template/FooterTemplate.vue'
    import CardComponentVue from '../components/CardComponent.vue'
    import { useSelectCategory } from '../stores/selectCategory'
    import MyArticleCardVue from '../components/MyArticleCard.vue'

    interface CardDataTypes {
        id: string
        title: string
        description: string
        createdAt: string
        imageUrl: string
        category?: string
    }

    const cardData: CardDataTypes[] = [
        {
            id: '1', 
            title: 'Este tem a categoria Web',
            description: 'Este artigo trata sobre como usar as callbacks em JavaScript, além disso traz exemplos práticos sobre esse assunto tão importante.',
            createdAt: '  30 de Novembro, 2023', 
            imageUrl: 'https://blog.milvus.com.br/wp-content/uploads/tic_nas_empresas.jpg', 
            category: 'web'
        },
        {
            id: '2', 
            title: 'Este tem a categoria Mobile',
            description: 'Este artigo trata sobre como usar as callbacks em JavaScript, além disso traz exemplos práticos sobre esse assunto tão importante.',
            createdAt: '  30 de Novembro, 2023', 
            imageUrl: 'https://blog.milvus.com.br/wp-content/uploads/tic_nas_empresas.jpg', 
            category: 'mobile'
        },
        {
            id: '3', 
            title: 'Este tem a categoria Desktop',
            description: 'Este artigo trata sobre como usar as callbacks em JavaScript, além disso traz exemplos práticos sobre esse assunto tão importante.',
            createdAt: '  30 de Novembro, 2023', 
            imageUrl: 'https://blog.milvus.com.br/wp-content/uploads/tic_nas_empresas.jpg', 
            category: 'desktop'
        },
        {
            id: '4', 
            title: 'Este tem a categoria Ai',
            description: 'Este artigo trata sobre como usar as callbacks em JavaScript, além disso traz exemplos práticos sobre esse assunto tão importante.',
            createdAt: '  30 de Novembro, 2023', 
            imageUrl: 'https://blog.milvus.com.br/wp-content/uploads/tic_nas_empresas.jpg', 
            category: 'ai'
        }
    ]

    export default defineComponent({
        name: 'MyArticlesPage', 
        components: { HeaderTemplateVue, HeaderCategoryTemplateVue, ContentTemplateVue, FooterTemplateVue, MyArticleCardVue }, 
        setup() {
            const selectCategory = useSelectCategory()

            const capitalizeFirstLetter = (string) => {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

            const filterByCategory = () => {
                return cardData.filter(item => item.category === selectCategory.selectedCategory)
            }

            return {
                capitalizeFirstLetter,
                selectCategory, 
                filterByCategory
            }
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
                <h3 class="subtitle">
                    {{ `Artigos sobre desenvolvimento ${capitalizeFirstLetter(selectCategory.selectedCategory)}` }}
                </h3>
            </div>
             <div class="articlesContainer">
                <MyArticleCardVue 
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