<script setup lang="ts">
    import { ref, defineProps } from 'vue'

    const props = defineProps({
        imageUrl: String, 
        title: String,
        description: String, 
        createdAt: String,
        category: String
    })
</script>

<template> 
    <div class="articleContainer">
        <img 
            class="articleImage"
            :src="imageUrl" 
            alt="img"
        >
        <div class="articleInfor">
            <div class="titleContainer">
                <h1 class="articleTitle">{{ title }}</h1>
            </div>
            <div class="descriptionContainer">
                <p class="articleDescription">
                    {{ description }}
                </p>
            </div>
            <div class="createdAtContainer">
                <h3 class="createdAt">
                    {{ createdAt }}
                </h3>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .articleContainer {
        width: 400px;
        height: 330px;
        display: flex;
        margin: 5px;
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
        height: 50%;
    }

    .articleContainer .articleInfor {
        width: 100%;
        height: 50%;
        padding: 10px 25px;
    }
    
    .articleInfor .titleContainer {
        width: 100%;
        height: auto;
    }

    .titleContainer .articleTitle {
        font-size: 1.2rem;
        font-weight: 400;
    }

    .articleInfor .descriptionContainer {
        width: 100%;
        height: 50%;
        margin-top: 10px;
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