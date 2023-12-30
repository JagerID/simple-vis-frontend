import { ComponentPropsWithRef, ElementType, PropsWithChildren } from 'react';

type PolymorphOwnProps<E extends ElementType> = {
  as?: E;
};

export type PolymorphProps<E extends ElementType = ElementType> =
  PropsWithChildren &
    Omit<ComponentPropsWithRef<E>, keyof PolymorphOwnProps<E>> &
    PolymorphOwnProps<E>;
