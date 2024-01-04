import axios from "axios"

const success = res => res
const error = err => {
    if(403 === err.response.status) {
        window.location = '/'
    } else {
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(success, error)