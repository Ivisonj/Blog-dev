<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AlertComponent',
    props: {
        status: Number, 
        message: String
    }, 
    mounted() {
        setTimeout(() => {
            this.$el.style.display = 'none'
        }, 7000)
    },
    computed: {
        alertType() {
            if(this.status >= 200 && this.status < 300) {
                return 'alert-success'
            }
            if(this.status >= 400 && this.status < 500) {
                return 'alert-warning'
            }
            if(this.status >= 500 && this.status < 600) {
                return 'alert-danger'
            }

            return 'alert-info'
        }
    }
})
</script>

<template> 
    <div :class="['alert', alertType]" role="alert">
        {{ message }}
    </div>
</template>
<style scoped>
    .alert {
        position: absolute;
        width: auto;
        right: 20px;
    }
</style>