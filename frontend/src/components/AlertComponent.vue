<script lang="ts">
    import { defineComponent } from 'vue'
    import { useStatusError } from '../stores/statusError'
    import { useMessageError } from '../stores/msgError'

export default defineComponent({
    name: 'AlertComponent',
    // props: {
    //     status: Number, 
    //     message: String
    // }, 
    mounted() {
        setTimeout(() => {
            this.$el.style.display = 'none'
        }, 7000)
    },
    computed: {
        alertType() {
            const statusError = useStatusError()
            
            if(statusError.status >= 200 && statusError.status < 300) {
                return 'alert-success'
            }
            if(statusError.status >= 400 && statusError.status < 500) {
                return 'alert-warning'
            }
            if(statusError.status >= 500 && statusError.status < 600) {
                return 'alert-danger'
            }

            return ''
        }
    }, setup() {
        const messageError = useMessageError()

        return {
            messageError
        }
    }
})
</script>

<template> 
    <div :class="['alert', alertType]" role="alert">
        {{ messageError.message }}
    </div>
</template>
<style scoped>
    .alert {
        position: absolute;
        width: auto;
        right: 40px;
        top: 60px;
    }
</style>