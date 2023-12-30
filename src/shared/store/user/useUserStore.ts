import { create } from 'zustand'
import { UserStoreState } from './types'
import { persist } from 'zustand/middleware'

const initialState = {
  id: undefined,
  email: undefined,
  role: undefined,
  isAuthorized: false
}

export const useUserStore = create<UserStoreState>()(
  persist(
    (set) => ({
      ...initialState,
      setUser(user) {
        set(user)
        set({ isAuthorized: true })
      },
      clearUser() {
        set(initialState)
      }
    }),
    { name: 'user' }
  )
)
