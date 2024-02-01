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

axiosAuth.interceptors.response.use(
  (response) => response, 
  async (error) => {
    const prevRequest = error?.config
    if (error?.response?.status === 403 && !prevRequest?.sent) {
      prevRequest.sent = true
      window.localStorage.removeItem('userId')
      window.localStorage.removeItem('token')
      window.location.href = '/'
      return axiosAuth(prevRequest)
    }
    return Promise.reject(error)    
  }
)
  