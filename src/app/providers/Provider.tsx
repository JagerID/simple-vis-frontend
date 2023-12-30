import { Toaster } from 'react-hot-toast'
import { QueryProvider } from './QueryProvider'
import { RouterProvider } from './RouterProvider'

export const Provider = () => {
  return (
    <QueryProvider>
      <RouterProvider />
      <Toaster />
    </QueryProvider>
  )
}
