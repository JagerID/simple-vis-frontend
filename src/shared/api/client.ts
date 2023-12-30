import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import toast from 'react-hot-toast'

export const client = axios.create({
  baseURL: '/api',
  withCredentials: true
})

client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem('access_token')
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

client.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    if (error?.response) {
      if (error.response.data) {
        toast.error(error.response.data?.message)
      }
    }
    throw new Error()
  }
)
