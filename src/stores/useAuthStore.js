import { create } from 'zustand'

export const useAuthStore = create((set) => ({
    profile: null,
    token: null,
    isLogged: false,
    login: (userLogged) => set({profile: userLogged.profile, token: userLogged.token, isLogged: true}),
    logout: () => set({profile: null, token: null, isLogged: false})
}))