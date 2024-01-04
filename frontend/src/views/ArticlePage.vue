<script setup lang="ts">
    // import FooterComponentVue from '../components/FooterComponent.vue'
    // import HeaderCategoryVue from '../components/HeaderCategory.vue'
    // import HeaderComponentVue from '../components/HeaderComponent.vue'

    interface CardDataTypes {
        id: string
        title: string
        description: string
        createdAt: string
        imageUrl: string
        category?: string
        content?: string 
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
    ]

    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
</script>

<template>
  <main class="articlePageContainer">
    <!-- <HeaderComponentVue />
    <HeaderCategoryVue />
    <div class="articlePageContent">
        <div class="articleInfor">
            <h3 class="articleCategory"> {{ `Categoria: ${capitalizeFirstLetter(cardData[0].category)}` }}</h3>
            <h1 class="articleTitle">{{ cardData[0].title }}</h1>
            <h3 class="createdAt">{{ cardData[0].createdAt }}</h3>
        </div>
        <div class="imageContainer">
            <img class="articleImage" :src="cardData[0].imageUrl" alt="img">
        </div>
        <div class="articalContent">
            Este artigo,,,
        </div>
    </div> -->
    <!-- <FooterComponentVue /> -->
  </main>
</template>
<style scoped>
    .articlePageContainer {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
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
        font-size: 2.2rem;
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

</style>