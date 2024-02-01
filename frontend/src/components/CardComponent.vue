<script lang="ts">
    import { defineComponent } from 'vue'
    import { useRouter } from 'vue-router'
    import { format, parseISO } from 'date-fns'
    import { ptBR } from 'date-fns/locale'

    export default defineComponent({
        name: 'CardComponent', 
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

             const formattedDate = format(parseISO(props.createdAt), 'dd \'de\' MMMM, yyyy', { locale: ptBR })

            return {
                navigate, 
                formattedDate
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
                    {{ formattedDate }}
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
    }

    .descriptionContainer .articleDescription {
        font-size: 0.9rem;
        font-weight: 100;
        margin: 0;
    }

    .articleInfor .createdAtContainer {
        width: 100%;
        height: 10%;
    }

    .createdAtContainer .createdAt {
        font-size: 0.9rem;
        font-weight: 100;
    }

    @media screen and (max-width: 400px) {
        .articleContainer {
            margin-top: 24px;
        }
    }
</style> 