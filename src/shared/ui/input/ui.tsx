import { cx } from 'class-variance-authority'
import { ForwardRefExoticComponent, forwardRef, useRef, useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { inputStyles } from './styles'
import { InputProps } from './types'
import { Box, Message, Typography } from '..'

export const Input = forwardRef<
  ForwardRefExoticComponent<HTMLInputElement>,
  InputProps
>(
  (
    {
      className,
      field,
      fieldState,
      label,
      prevIcon,
      size,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>()

    const [typeState, setTypeState] = useState<string>(type)

    const focusOnInput = () => {
      if (ref) {
        ref.current.focus()
      } else {
        inputRef?.current!.focus()
      }
    }

    return (
      <Box
        className={cx(
          'flex flex-col w-full relative',
          size === 'xs' ? 'gap-[3px]' : 'gap-[7px]'
        )}
      >
        {label && (
          <Typography
            as="label"
            className="self-start"
            color={fieldState?.error && 'error'}
          >
            {label}
          </Typography>
        )}
        {prevIcon && (
          <Box
            className="absolute -translate-y-1/2 left-[6px] top-1/2 flex items-center justify-center w-[14px] h-[14px] text-[#9ca3af] z-[1]"
            onClick={focusOnInput}
          >
            {prevIcon}
          </Box>
        )}
        <Box className="relative">
          <input
            ref={ref}
            type={typeState}
            value={field?.value || ''}
            onChange={field?.onChange}
            className={cx(
              inputStyles({
                className,
                color: fieldState?.error && 'error',
                size
              }),
              prevIcon && 'pl-6'
            )}
            {...props}
          />
          {type === 'password' && (
            <Box className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-3">
              {typeState === 'password' ? (
                <BsEyeSlash className="fill-green-500 w-5 h-5" onClick={() => setTypeState('text')} />
              ) : (
                <BsEye className="fill-green-500 w-5 h-5" onClick={() => setTypeState('password')} />
              )}
            </Box>
          )}
        </Box>
        {fieldState?.error && (
          <Message size="xs" variant="error">
            {fieldState.error.message}
          </Message>
        )}
      </Box>
    )
  }
)

export default Input
