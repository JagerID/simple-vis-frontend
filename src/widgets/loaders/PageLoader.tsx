import { Box, Typography } from '@shared/ui'
import { LiaGlobeEuropeSolid } from 'react-icons/lia'

export const PageLoader = () => {
  return (
    <Box className="w-screen h-screen grid place-items-center bg-dark-500">
      <Box className="flex flex-col gap-5 items-center justify-center animate-pulse">
        <LiaGlobeEuropeSolid className="w-24 h-24 fill-white" />
        <Typography as="h3" className="ml-4 select-none text-white">
          Загрузка...
        </Typography>
      </Box>
    </Box>
  )
}
