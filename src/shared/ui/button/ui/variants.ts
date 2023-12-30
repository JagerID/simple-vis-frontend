import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'transition-all duration-100 stroke-green-500',
  {
    variants: {
      variant: {
        filled: 'border-2 text-dark-500',
        inverted: 'border-2 !bg-transparent text-white hover:text-gray-300'
      },
      color: {
        green:
          'bg-green-500 hover:bg-green-400 active:bg-green-600 border-green-500 hover:border-green-400 active:border-green-600'
      },
      size: {
        md: 'px-[30px] py-[12px] rounded-lg font-semibold text-[24px]',
        sm: 'px-[24px] py-[8px] rounded-lg font-semibold text-[20px]',
        xs: 'px-[16px] py-[6px] rounded-lg font-semibold text-[16px]'
      }
    },
    defaultVariants: {
      variant: 'filled',
      color: 'green',
      size: 'sm'
    }
  }
)

export const buttonTextVariants = cva(
  'border-none transition-all duration-100 inline-block stroke-green-500',
  {
    variants: {
      variant: {
        filled: 'text-dark-500',
        inverted: '!bg-transparent text-white hover:text-gray-300'
      },
      color: {
        green: 'text-green-500 hover:text-green-300 hover:stroke-green-300 active:stroke-green-600 active:text-green-600'
      },
      size: {
        md: 'font-semibold text-[24px]',
        sm: 'font-semibold text-[20px]',
        xs: 'font-medium text-[16px]'
      }
    },
    defaultVariants: {
      variant: 'filled',
      color: 'green',
      size: 'xs'
    }
  }
)
