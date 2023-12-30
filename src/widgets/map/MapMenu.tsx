import { Box, TextButton, Typography } from '@shared/ui'
import { Rnd } from 'react-rnd'
import { motion } from 'framer-motion'
import { useUserStore } from '@shared/store/user'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '@shared/lib/react-router'
import { VectorLayerUploader } from '@widgets/uploaders/VectorLayerUploader'
import { useUnauthorizedStore } from '@shared/store/unauthorized'
import { LayerControl } from '@widgets/layers'

export const MapMenu = () => {
  const navigate = useNavigate()
  const { isAuthorized } = useUserStore()
  const { layer } = useUnauthorizedStore()

  return (
    <Rnd
      default={{ x: 30, y: 30, width: 'auto', height: 'auto' }}
      enableResizing={false}
      className="z-[10]"
    >
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 100,
          transition: {
            delayChildren: 0.3
          }
        }}
      >
        <Box className="p-5 bg-dark-500 rounded w-[300px] flex flex-col gap-5">
          <Box className="flex flex-col gap-[6px]">
            <motion.div
              initial={{ x: -70, opacity: 0 }}
              animate={{ x: 0, opacity: 100, transition: { delay: 0.2 } }}
            >
              <Typography as="h4" className="font-semibold">
                Меню карты
              </Typography>
            </motion.div>
            <motion.div
              initial={{ x: -70, opacity: 0 }}
              animate={{ x: 0, opacity: 100, transition: { delay: 0.23 } }}
            >
              <TextButton
                className="flex items-center gap-1"
                onClick={() => navigate(PATHS.home)}
              >
                <IoArrowBackOutline className="stroke-inherit" />
                <Typography as="p" className="font-medium text-inherit">
                  На главную
                </Typography>
              </TextButton>
            </motion.div>
          </Box>
          {layer ? <LayerControl /> : <VectorLayerUploader />}
        </Box>
      </motion.div>
    </Rnd>
  )
}
