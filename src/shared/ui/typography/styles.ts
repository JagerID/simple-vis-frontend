import { cva } from 'class-variance-authority';

export const typographyStyles = cva('', {
  defaultVariants: {
    as: 'span',
  },
  variants: {
    as: {
      h1: 'text-3xl font-medium',
      h2: 'text-[28px] font-medium',
      h3: 'text-2xl font-medium',
      h4: 'text-xl font-medium',
      h5: 'text-base font-medium',
      h6: 'text-[13px] font-medium',
      label: 'text-xs font-semibold',
      p: 'text-base',
      span: 'text-xs',
    },
    color: {
      error: 'text-red-500',
    },
  },
});
