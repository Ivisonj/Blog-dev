<script lang="ts">
    import { useRouter } from 'vue-router'
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'DropdownComponent',
        setup() {
            const router = useRouter()
            const logout = () => {
                window.localStorage.removeItem('token')
                router.push('/')
                window.location.reload()
            }
            return {
                logout
            }
        }
    })
</script>

<template> 
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <font-awesome-icon style="marginRight: 10px" icon="fa-bars" />
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="/create">Criar Artigo</a></li>
            <li><a class="dropdown-item" href="/my-articles">Meus Artigos</a></li>
            <li><div class="dropdown-item" @click="logout">Sair</div></li>
        </ul>
    </div>
</template>

<style scoped>
    .btn-secondary.dropdown-toggle {
        background-color: #141434;
    }
</style>