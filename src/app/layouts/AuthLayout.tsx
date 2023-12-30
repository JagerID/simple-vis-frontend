import { useUserStore } from '@shared/store/user'
import { Box } from '@shared/ui'
import { ReactNode, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const { isAuthorized } = useUserStore()

  useEffect(() => {
    if (isAuthorized) {
      toast.success('Вы уже авторизованы')
      navigate(-1)
    }
  }, [])

  return (
    <Box className="grid place-items-center bg-dark-500 min-h-screen w-screen">
      {children}
    </Box>
  )
}
