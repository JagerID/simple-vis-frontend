export type AuthStoreState = {
  setAccessTokenToLS: (accessToken: string) => void
  logout: () => void
}
