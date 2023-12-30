/* eslint-disable @typescript-eslint/no-explicit-any */
import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { PolymorphProps } from '../polymorph/types';
import { inputStyles } from './styles';

enum inputTagsVariants {
  input,
}

export type InputProps = Omit<
  PolymorphProps<keyof typeof inputTagsVariants>,
  'size'
> &
  VariantProps<typeof inputStyles> & {
    prevIcon?: ReactNode;
    label?: string;
    fieldState?: ControllerFieldState;
    field?: ControllerRenderProps<any, any>;
  };
