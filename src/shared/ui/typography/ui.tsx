import { FC } from 'react'
import { Polymorph } from '../polymorph'
import { typographyStyles } from './styles'
import { TypographyProps } from './types'

export const Typography: FC<TypographyProps> = ({
  as,
  children,
  className,
  color,
  ...props
}) => {
  return (
    <Polymorph
      as={as}
      className={typographyStyles({ as, className, color })}
      {...props}
    >
      {children}
    </Polymorph>
  )
}
