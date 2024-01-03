<script setup lang="ts">
    import { capitalize, computed } from 'vue'
    import CardComponentVue from '../components/CardComponent.vue'
    import FooterComponentVue from '../components/FooterComponent.vue'
    import HeaderCategoryVue from '../components/HeaderCategory.vue'
    import HeaderComponentVue from '../components/HeaderComponent.vue'
    import { useSelectCategory } from '../stores/selectCategory'

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

    const selectCategory = useSelectCategory()

    const filterByCategory = computed(() => {
        return cardData.filter(item => item.category === selectCategory.selectedCategory)
    })

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
</script>

<template>
    <div class="homeContainer">
        <HeaderComponentVue />
        <HeaderCategoryVue />
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
                v-for="card in filterByCategory" 
                :key="card.id" 
                :title="card.title"
                :description="card.description"
                :createdAt="card.createdAt"
                :imageUrl="card.imageUrl"
            />
        </div>
        <FooterComponentVue />
    </div>
</template>

<style scoped>
    .homeContainer {
        width: 100vw;
        height: 100vh;
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