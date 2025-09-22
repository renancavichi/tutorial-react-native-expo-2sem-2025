import { create } from 'zustand'

export const useUserStore = create((set) => ({
    users: [],
    setUsers: (users) => set({ users }),
}))