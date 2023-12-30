import { FC } from 'react'
import { messageStyles } from './style'
import { MessageProps } from './types'
import { Typography } from '..'

export const Message: FC<MessageProps> = ({
  children,
  className,
  size,
  variant
}) => {
  return (
    <Typography
      as="span"
      className={messageStyles({ className, size, variant })}
    >
      {children}
    </Typography>
  )
}
