import { ACCEPTED_FILE_TYPES } from '@entities/vector/config'
import { uploadScheme } from '@entities/vector/schemes/upload.scheme'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Message, Typography } from '@shared/ui'
import {
  formatFileName,
  formatFileSize,
  formatTypesToInputAccept
} from '@shared/utils/utils'
import { useId, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useUnauthorizedStore } from '@shared/store/unauthorized'
import { createVectorDeckLayer } from '@shared/utils/deck'

export const VectorLayerUploader = () => {
  const id = useId()
  const [isLoading] = useState<boolean>(false)
  const { setLayer, setFile } = useUnauthorizedStore()

  const { control, watch, handleSubmit } = useForm({
    resolver: zodResolver(uploadScheme),
    mode: 'all'
  })

  const file = watch('file')

  const onSubmit = handleSubmit(async ({ file }) => {
    const reader = new FileReader()
    setFile(file)
    reader.onload = (e) => {
      const obj = JSON.parse(e.target?.result)
      const layer = createVectorDeckLayer(file.name, obj)
      setLayer(layer)
    }
    reader.readAsText(file)
  })

  return (
    <Box as="form" className="w-full" onSubmit={onSubmit}>
      {file ? (
        <Box className="flex flex-col gap-5">
          <Box className="flex flex-col gap-1">
            <Box className="flex items-center gap-1">
              <Typography as="p">Имя файла: </Typography>
              <Typography as="p" className="text-green-500">
                {formatFileName(file.name)}
              </Typography>
            </Box>
            <Box className="flex items-center gap-1">
              <Typography as="p">Размер файла: </Typography>
              <Typography as="p" className="text-green-500">
                {formatFileSize(file.size)}
              </Typography>
            </Box>
            <Box className="flex items-center gap-1">
              <Typography as="p">Тип файла: </Typography>
              <Typography as="p" className="text-green-500">
                {file.type}
              </Typography>
            </Box>
          </Box>
          <Button type="submit" size="sm" isLoading={isLoading}>
            Загрузить
          </Button>
        </Box>
      ) : (
        <Controller
          control={control}
          name="file"
          render={({ field, fieldState }) => (
            <>
              <motion.label
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 100, x: 0, transition: { delay: 0.26 } }}
                htmlFor={id}
                className="block w-full h-16 relative border-2 border-white rounded cursor-pointer"
              >
                <input
                  id={id}
                  type="file"
                  className="hidden"
                  accept={formatTypesToInputAccept(ACCEPTED_FILE_TYPES)}
                  ref={field.ref}
                  onChange={(e) => {
                    field.onChange(e.target.files?.[0])
                  }}
                />
                <Typography
                  as="p"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap"
                >
                  Перетащите файл
                </Typography>
              </motion.label>
              {fieldState?.error && (
                <Message variant="error" size="sm">
                  {fieldState.error.message}
                </Message>
              )}
            </>
          )}
        />
      )}
    </Box>
  )
}
