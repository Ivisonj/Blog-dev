<script setup lang="ts">
</script>

<template> 
    <div class="articleContainer">
        <img 
            class="articleImage"
            src="https://blog.milvus.com.br/wp-content/uploads/tic_nas_empresas.jpg" 
            alt="img"
        >
        <div class="articleInfor">
            <div class="titleContainer">
                <h1 class="articleTitle">Estudo sobre callbacks em JavaScript</h1>
            </div>
            <div class="descriptionContainer">
                <p class="articleDescription">
                    Este artigo trata sobre como usar as callbacks em JavaScript, além disso traz exemplos práticos
                    sobre esse assunto tão importante.
                </p>
            </div>
            <div class="createdAtContainer">
                <h3 class="createdAt">
                    30 de Novembro, 2023
                </h3>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .articleContainer {
        width: 470px;
        height: 400px;
        display: flex;
        flex-direction: column;
        background-color: #eae8eb;
        cursor: pointer;   
        transition: 0.5s;
    }

    .articleContainer:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .articleImage {
        width: 100%;
        height: 200px;
    }

    .articleContainer .articleInfor {
        width: 100%;
        height: 200px;
        padding: 10px 25px;
    }
    
    .articleInfor .titleContainer {
        width: 100%;
        height: 30%;
    }

    .titleContainer .articleTitle {
        font-size: 1.5rem;
        font-weight: 400;
    }

    .articleInfor .descriptionContainer {
        width: 100%;
        height: 50%;
    }

    .descriptionContainer .articleDescription {
        font-size: 0.9rem;
        font-weight: 100;
    }

    .articleInfor .createdAtContainer {
        width: 100%;
        height: 10%;
    }

    .createdAtContainer .createdAt {
        font-size: 0.9rem;
        font-weight: 100;
    }
</style>