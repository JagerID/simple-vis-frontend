import { useMutation, useQuery } from '@tanstack/react-query'
import { UserAPI } from '.'

export const useLoginUser = () => {
  return useMutation({
    mutationFn: UserAPI.login
  })
}

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: UserAPI.register
  })
}

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: UserAPI.getUsers
  })
}

export const useLogoutUser = () => {
  return useMutation({
    mutationFn: UserAPI.logout
  })
}
