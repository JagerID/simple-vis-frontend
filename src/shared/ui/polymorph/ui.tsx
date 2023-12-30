/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, forwardRef } from 'react';
import { PolymorphProps } from './types';

export const Polymorph = forwardRef(
  <E extends ElementType>(
    { as, children, ...props }: PolymorphProps<E>,
    ref: any
  ) => {
    const Tag = as || ('div' as ElementType);

    return (
      <Tag ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

