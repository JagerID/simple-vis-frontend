import { Box } from '@shared/ui'
import { ReactNode } from 'react'

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box className="bg-dark-500 h-screen max-w-screen overflow-hidden w-full pt-[70px]">
      {children}
    </Box>
  )
}
