<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ContentTemplate'
})
</script>

<template> 
    <div class="contentTemplate">
        <slot></slot>
    </div>
</template>

<style scoped>
    .contentTemplate {
        grid-area: content;
        background-color: #fff;
    }
</style>
