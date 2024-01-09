import axios from "axios"
import { baseUrl } from "@/global"

export const axiosAuth = axios.create({
  baseURL:  baseUrl,
  headers: { "Content-Type": "application/json" }
})

axiosAuth.interceptors.request.use(request => {
    const token = window.localStorage.getItem('token')
  
    if (token) {
      request.headers['Authorization'] = `Bearer ${token}`
    }

    return request
  }, error => {
    return Promise.reject(error)
})
  
//   // Seu código existente
//   const success = res => res
//   const error = err => {
//     if(403 === err.response.status) {
//       window.location = '/'
//     } else {
//       return Promise.reject(err)
//     }
//   }
  
//   axios.interceptors.response.use(success, error)
  