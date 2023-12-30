import { cva } from 'class-variance-authority';

export const inputStyles = cva(
  'w-full outline-none read-only:bg-gray-400 read-only:font-medium read-only:text-gray-800 read-only:border-green-800',
  {
    defaultVariants: {
      size: 'sm',
      variant: 'primary',
    },
    variants: {
      color: {
        error: 'border-red-500',
      },
      size: {
        sm: 'px-3 py-2 text-sm',
        xs: 'px-3 h-7 text-xs',
      },
      variant: {
        primary: 'bg-transparent border-2 rounded border-green-500',
      },
    },
  }
);
