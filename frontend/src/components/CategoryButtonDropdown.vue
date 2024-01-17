<script lang="ts">
    import { useRouter } from 'vue-router'
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'CategoryButtonDropdown',
        setup() {
            const router = useRouter()
            const logout = () => {
                window.localStorage.removeItem('token')
                router.push('/')
                if(router.currentRoute.value.path === '/') {
                    window.location.reload()
                }
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
            Categorias
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="/">Web</a></li>
            <li><a class="dropdown-item" href="/">Mobile</a></li>
            <li><a class="dropdown-item" href="/">Desktop</a></li>
            <li><a class="dropdown-item" href="/">Ai</a></li>
        </ul>
    </div>
</template>

<style scoped>
    .btn-secondary.dropdown-toggle {
        background-color: #fff;
        color: #000;
        margin-left: 20px;
        border: none;
    }

    .dropdown-item {
        cursor: pointer;
    }
</style>