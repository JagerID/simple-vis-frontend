import { z } from 'zod'
import { loginScheme } from '..'

export type LoginUser = z.infer<typeof loginScheme>
