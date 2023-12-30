import { create } from 'zustand'
import { AuthStoreState } from './types'
import { useUserStore } from '../user'

export const useAuthStore = create<AuthStoreState>()(() => ({
  setAccessTokenToLS(accessToken) {
    localStorage.setItem('access_token', accessToken)
  },
  logout() {
    localStorage.clear()
    useUserStore.getState().clearUser()
  }
}))
