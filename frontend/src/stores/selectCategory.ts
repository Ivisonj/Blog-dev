import { createPinia, defineStore } from "pinia"

export const useSelectCategory = defineStore({
    id: 'selectCategory', 
    state: () => ({
        selectedCategory: 'web'
    }),
    actions: {
        setSelectedCategory(newState) {
            this.selectedCategory = newState
        }
    }
})