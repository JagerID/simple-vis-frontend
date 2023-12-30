import { forwardRef } from 'react'
import { Polymorph } from '../polymorph'
import { BoxProps } from './types'

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as, children, ...props }, ref) => {
    return (
      <Polymorph ref={ref} as={as} {...props}>
        {children}
      </Polymorph>
    )
  }
)
