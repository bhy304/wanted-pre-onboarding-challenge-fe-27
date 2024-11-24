import axios, { AxiosError, AxiosInstance, AxiosPromise } from 'axios'

const BASE_URL = 'http://localhost:8080'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return Promise.resolve({ ...config })
}, (error) => {
  return Promise.reject(error)
})

// 응답 인터셉처 추가
axiosInstance.interceptors.response.use((response) => {
  return response
}, (error: AxiosError | Error) => {
  let err = {}

  if (axios.isAxiosError(error)) {
    switch (error.status) {
      case 400:
      case 401:
      case 403:
      case 404:
      case 409:
      case 500:
        err = { status: error.status, message: error?.response?.data.details }
        throw err
      default:
        break
    }
  }

  return Promise.reject(error)
})

const axiosAPI = {
  get: async <T> (url: string): AxiosPromise<T> => {
    const response = await axiosInstance.get<T>(url)
    return response
  },
  post: async <T, P> (url: string, data?: P): AxiosPromise<T> => {
    const response = await axiosInstance.post<T>(url, data)
    return response
  },
  put: async <T, P> (url: string, data?: P): AxiosPromise<T> => {
    const response = await axiosInstance.put<T>(url, data)
    return response
  },
  delete: async <T> (url: string): AxiosPromise<T> => {
    const response = await axiosInstance.delete<T>(url)
    return response
  }
}

export default axiosAPI