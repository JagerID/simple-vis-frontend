import { Polymorph } from '@shared/ui/polymorph'
import { ButtonProps } from './types'
import { buttonTextVariants } from './variants'

export const TextButton = ({
  isLoading,
  children,
  color,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <Polymorph
      as="button"
      className={buttonTextVariants({ size, color, variant, className })}
      {...props}
    >
      {children}
    </Polymorph>
  )
}
