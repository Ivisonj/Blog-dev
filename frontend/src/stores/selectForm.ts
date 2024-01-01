import { createPinia, defineStore } from "pinia"

const pinia = createPinia()

export const useSelectForm = defineStore({
    id: 'selectForm', 
    state: () => ({
        currentForm: '2'
    }),
    actions: {
        setCurrentForm(newState) {
            this.currentForm = newState
        }
    }
})