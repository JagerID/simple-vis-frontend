import { PATHS } from '@shared/lib/react-router'
import {
  Box,
  GlowBlock,
  NavigateButton,
  NonStandart,
  Rectangle
} from '@shared/ui'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <Box className="relative h-full max-w-[1440px] w-full m-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100, transition: { duration: 0.8 } }}
      >
        <Box className="absolute left-[20%] bottom-[20%] rounded-[18px] p-[21px] bg-white bg-opacity-20 flex flex-col gap-[21px] w-[324px]">
          <NavigateButton
            to={PATHS.map}
            className="w-full flex justify-center items-center gap-2"
          >
            На карту <FaArrowRight className="fill-dark-500" />
          </NavigateButton>
        </Box>
      </motion.div>

      <motion.div
        initial={{ x: 100, y: -50, rotate: '45deg' }}
        animate={{
          x: 0,
          y: 0,
          rotate: '0deg',
          transition: { type: 'inertia', velocity: 100 }
        }}
      >
        <Box className="absolute left-[7%] top-[240px]">
          <Rectangle className="w-[285px] h-[244px]" />
        </Box>
      </motion.div>
      <motion.div
        initial={{ x: 200, y: -50, rotate: '-45deg' }}
        animate={{
          x: 0,
          y: 0,
          rotate: '0deg',
          transition: { type: 'inertia', velocity: 260 }
        }}
      >
        <Box className="absolute left-[60%]">
          <NonStandart />
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 100, x: 0, y: 0, transition: { duration: 0.7 } }}
      >
        <GlowBlock
          fill="#087e69"
          className="absolute left-[32px] top-[-147px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100, y: 270 }}
        animate={{ opacity: 100, x: 0, y: 0, transition: { duration: 1 } }}
      >
        <GlowBlock fill="#087e69" className="absolute left-1/2 top-[760px]" />
      </motion.div>
    </Box>
  )
}
