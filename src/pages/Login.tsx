import { loginScheme, useLoginUser } from '@entities/user'
import { LoginUser } from '@entities/user/types'
import { PATHS } from '@shared/lib/react-router'
import { Box, Button, Input, TextButton, Typography } from '@shared/ui'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthStore } from '@shared/store/auth'
import { useUserStore } from '@shared/store/user'
import { zodResolver } from '@hookform/resolvers/zod'

export const Login = () => {
  const navigate = useNavigate()
  const { control, handleSubmit } = useForm<LoginUser>({
    resolver: zodResolver(loginScheme)
  })
  const { mutate: loginUser, isPending } = useLoginUser()
  const { setAccessTokenToLS } = useAuthStore()
  const { setUser } = useUserStore()

  const onSubmit = handleSubmit((data) => {
    loginUser(data, {
      onSuccess: (data) => {
        const { access_token, user } = data.data
        setAccessTokenToLS(access_token)
        setUser(user)

        navigate(PATHS.home)
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
          Вход
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
              <Box className="relative w-full">
                <Input
                  autoComplete="off"
                  placeholder="Пароль"
                  type="password"
                  fieldState={fieldState}
                  {...field}
                />
              </Box>
            )}
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
        >
          <Button className="w-full" type="submit" size="sm">
            Войти
          </Button>
        </motion.div>
      </Box>
      <Box className="w-full border-t-2 border-green-500 pt-2">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }}>
          <Typography as="p" className="inline-block">
            Нет аккаунта?
          </Typography>{' '}
          <TextButton onClick={() => navigate(PATHS.register)}>
            Зарегистрироваться
          </TextButton>
        </motion.div>
      </Box>
    </Box>
  )
}
