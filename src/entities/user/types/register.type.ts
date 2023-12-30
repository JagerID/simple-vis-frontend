import { registerScheme } from '..'
import { z } from 'zod'

export type RegisterUser = z.infer<typeof registerScheme>
