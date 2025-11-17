import axios from 'axios'
import { useAuthStore } from '../stores/useAuthStore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(config => {
    const token = useAuthStore.getState().token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, error => {
    return Promise.reject(error)
})

api.interceptors.response.use(
  (response) => response,
    async (error) => {
    if (error.response?.status === 401 && error.response?.data?.errorCode === 'TOKEN_INVALID') {
        console.log("Token inválido ou expirado. Faça login novamente.")
        useAuthStore.getState().logout()
        await AsyncStorage.removeItem('userLogged')
        router.replace('/login')
    }
    return error.response;
  }
);