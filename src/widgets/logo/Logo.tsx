import { PATHS } from '@shared/lib/react-router'
import { Typography } from '@shared/ui'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const logoVariants = {
  hidden: { opacity: 0, x: -70 },
  show: {
    opacity: 100,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

export const Logo = () => {
  const navigate = useNavigate()
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={logoVariants}
      onClick={() => navigate(PATHS.home)}
      className="cursor-pointer"
    >
      <Typography as="h2" className="font-bold">
        Simple Vis
      </Typography>
    </motion.div>
  )
}
