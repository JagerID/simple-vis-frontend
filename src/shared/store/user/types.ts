export type User = {
  email: string
  id: number
  role: string
}

export type UserStoreState = Partial<User> & {
  isAuthorized: boolean

  setUser: (user: User) => void
  clearUser: () => void
}
