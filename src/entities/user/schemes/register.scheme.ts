import { z } from 'zod'

export const registerScheme = z.object({
  email: z
    .string({ required_error: 'Поле обязательно к заполнению' })
    .email({ message: 'Некоррентный формат почты' }),
  password: z
    .string({ required_error: 'Поле обязательно к заполнению' })
    .min(6, { message: 'Пароль слишком короткий' })
    .max(20, { message: 'Пароль слишком длинный' })
})
