import { registerScheme, useRegisterUser } from '@entities/user'
import { RegisterUser } from '@entities/user/types'
import { PATHS } from '@shared/lib/react-router'
import { Box, Button, TextButton, Typography } from '@shared/ui'
import Input from '@shared/ui/input/ui'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'

export const Register = () => {
  const navigate = useNavigate()
  const { control, handleSubmit } = useForm<RegisterUser>({
    resolver: zodResolver(registerScheme)
  })
  const { mutate: registerUser, isPending } = useRegisterUser()

  const onSubmit = handleSubmit(async (data) => {
    registerUser(data, {
      onSuccess: () => {
        toast.success('Аккаунт успешно зарегистрирован!')
        navigate(PATHS.login)
      }
    })
  })

  return (
    <Box className="flex flex-col gap-7 items-center max-w-[280px] w-full">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
      >
        <Typography as="h3" className="font-extrabold">
          Регистрация
        </Typography>
      </motion.div>
      <Box as="form" className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 100, transition: { duration: 0.25 } }}
        >
          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ field, fieldState }) => (
              <Input
                autoComplete="off"
                placeholder="Email"
                fieldState={fieldState}
                {...field}
              />
            )}
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 100, transition: { duration: 0.25 } }}
        >
          <Controller
            name="password"
            defaultValue=""
            control={control}
            render={({ field, fieldState }) => (
              <Input
                autoComplete="off"
                type='password'
                placeholder="Пароль"
                fieldState={fieldState}
                {...field}
              />
            )}
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
        >
          <Button
            isLoading={isPending}
            className="w-full"
            type="submit"
            size="sm"
          >
            Зарегистрироваться
          </Button>
        </motion.div>
      </Box>
      <Box className="w-full border-t-2 border-green-500 pt-2">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }}>
          <Typography as="p" className="inline-block">
            Уже есть аккаунт?
          </Typography>{' '}
          <TextButton onClick={() => navigate(PATHS.login)}>Войти</TextButton>
        </motion.div>
      </Box>
    </Box>
  )
}
