import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { messageStyles } from './style';

export type MessageProps = PropsWithChildren &
  VariantProps<typeof messageStyles> & {
    className?: string;
  };
