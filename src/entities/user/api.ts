import { client } from '@shared/api'
import { LoginUser, RegisterUser } from './types'
import { UserAPIPaths } from './api-paths'

export const UserAPI = {
  async login(loginUser: LoginUser) {
    return client.post(UserAPIPaths.login, loginUser)
  },
  async register(registerUser: RegisterUser) {
    return client.post(UserAPIPaths.register, registerUser)
  },
  async logout() {
    return client.get(UserAPIPaths.logout)
  },
  async getUsers() {
    return client.get(UserAPIPaths.users)
  }
}
