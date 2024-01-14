<script lang="ts">
    import { defineComponent } from 'vue'
    import { useRouter } from 'vue-router'
    import { baseUrl } from '../global'
    import { axiosAuth } from '../config/axiosConfig'

    export default defineComponent({
        name: 'MyArticleCard', 
        props: {
            id: String,
            imageUrl: String, 
            title: String,
            description: String, 
            createdAt: String,
            category: String
        }, 
        setup(props) {
            const router = useRouter()
            const navigate = () => {
                router.push(`/article/${props.id}`)
            }

            const deleteCard = () => {
                const url = `${baseUrl}/api/article/delete/${props.id}`
                axiosAuth.delete(url)
                    .then(res => console.log(res))
                    .catch(err => console.error(err))

                window.location.reload()
            }

            return {
                navigate,
                deleteCard
            }
        }
    })
</script>

<template> 
    <div class="articleContainer" @click="navigate">
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
                <div class="buttonDelete" @click.stop="deleteCard">
                     <font-awesome-icon style="color: red" icon="fa-trash" />
                </div>
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
        height: 55%;
    }

    .articleContainer .articleInfor {
        width: 100%;
        height: 45%;
        padding: 10px 25px;
    }
    
    .articleInfor .titleContainer {
        width: 100%;
        height: auto;
    }

    .titleContainer .articleTitle {
        font-size: 1.2rem;
        font-weight: 400;
        margin: 0;
    }

    .articleInfor .descriptionContainer {
        width: 100%;
        height: 50%;
        margin-top: 10px;
    }

    .descriptionContainer .articleDescription {
        font-size: 0.9rem;
        font-weight: 100;
        margin: 0;
    }

    .articleInfor .createdAtContainer {
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: space-between;
    }

    .createdAtContainer .createdAt {
        font-size: 0.9rem;
        font-weight: 100;
    }

    .buttonDelete {
        transition: 0.5s;
    }

    .buttonDelete:active {
        transform: translateY(3px)
    }

</style>