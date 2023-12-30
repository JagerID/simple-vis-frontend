import { z } from 'zod'
import { MAX_FILE_SIZE } from '../config'
import { formatFileSize } from '@shared/utils/utils'

export const uploadScheme = z.object({
  file: z
    .custom<File>()
    .refine((file) => {
      return file
    }, 'Файл обязателен')
    .refine(
      (file) => file?.size <= MAX_FILE_SIZE,
      `Максимальный вес файла - ${formatFileSize(MAX_FILE_SIZE)}`
    )
})
