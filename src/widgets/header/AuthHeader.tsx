import { PATHS } from '@shared/lib/react-router'
import { Box } from '@shared/ui'
import { NavigateButton } from '@shared/ui/button'
import { Logo } from '@widgets/logo'
import { motion } from 'framer-motion'

const navVariants = {
  hidden: { opacity: 0, x: 70 },
  show: {
    opacity: 100,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

export const AuthHeader = () => {
  return (
    <Box className="absolute max-w-[1440px] w-full h-[110px] left-1/2 top-0 -translate-x-1/2 flex items-center px-5 justify-between z-[10]">
      <Logo />
      <motion.ul
        initial="hidden"
        animate="show"
        variants={navVariants}
        className="flex gap-7"
      >
        <motion.li>
          <NavigateButton to={PATHS.home} variant="inverted">
            На главную
          </NavigateButton>
        </motion.li>
      </motion.ul>
    </Box>
  )
}
