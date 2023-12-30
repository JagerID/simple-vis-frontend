import { cva } from 'class-variance-authority';

export const messageStyles = cva('', {
  defaultVariants: {
    size: 'xs',
    variant: 'error',
  },
  variants: {
    size: {
      md: '!text-base',
      sm: '!text-sm',
      xs: '!text-[10px]',
    },
    variant: {
      error: 'text-red-500',
      success: 'text-green-500',
    },
  },
});
