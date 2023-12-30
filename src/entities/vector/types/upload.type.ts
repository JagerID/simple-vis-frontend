import { z } from 'zod'
import { uploadScheme } from '../schemes/upload.scheme'

export type UploadFile = z.infer<typeof uploadScheme>
