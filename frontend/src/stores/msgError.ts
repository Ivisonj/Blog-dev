import { createPinia, defineStore } from "pinia"

export const useMessageError = defineStore({
    id: 'MessageError', 
    state: () => ({
        message: ''
    }),
    actions: {
        setMessage(newState) {
            this.message = newState
        }
    }
})