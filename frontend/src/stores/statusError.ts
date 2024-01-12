import { createPinia, defineStore } from "pinia"

export const useStatusError = defineStore({
    id: 'statusError', 
    state: () => ({
        status: null
    }),
    actions: {
        setSatus(newState) {
            this.status = newState
        }
    }
})