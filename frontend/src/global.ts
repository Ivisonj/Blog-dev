import { toast } from 'vue3-toastify'
export const baseUrl = 'https://backend-blog-dev.onrender.com'

export function showError(e) {
    let msg = 'Oops.. Erro inesperado.'
    if(e && e.response && e.response.data) {
        msg = e.response.data
    } else if(typeof e === 'string') {
        msg = e
    }
    toast.error(msg)
}

export function showSuccess(msg: string) {
    toast.success(msg)
}

export default { showError, showSuccess }