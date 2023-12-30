import { modes } from '@shared/store/edit/config'
import { useEditStore } from '@shared/store/edit/useEditStore'
import { useUnauthorizedStore } from '@shared/store/unauthorized'
import { Box, Button, Typography } from '@shared/ui'
import { FEATURE_COLLECTION } from '@shared/utils/deck'

export const LayerControl = () => {
  const {
    file,
    layer,
    flyToLayer,
    exportLayerData,
    hideLayer,
    showLayer,
    updateFeatures
  } = useUnauthorizedStore()
  const { mode, setMode, setFeatureCollection, featureCollection } =
    useEditStore()

  const startEdit = () => {
    if (layer) {
      setFeatureCollection(layer?.props?.features || FEATURE_COLLECTION)
      setMode(modes.editMode)
      hideLayer()

      layer?.props?.features && flyToLayer()
    }
  }

  const endEdit = () => {
    if (layer) {
      setMode(modes.viewMode)
      showLayer()
      updateFeatures(featureCollection)
    }
  }

  return (
    <Box className="flex flex-col gap-4">
      <Box className="flex gap-1 items-center">
        <Typography as="p">Слой: </Typography>
        <Typography as="p" className="text-green-500">
          {file?.name}
        </Typography>
      </Box>
      <Button size="xs" onClick={flyToLayer} variant="inverted">
        Переместиться к слою
      </Button>
      {mode.type === 'edit' ? (
        <Button size="xs" onClick={endEdit}>
          Выйти из редактирования
        </Button>
      ) : (
        <Button size="xs" onClick={startEdit}>
          Перейти к редактированию
        </Button>
      )}
      <Button size="xs" onClick={exportLayerData} variant="inverted">
        Экспортировать данные
      </Button>
      {layer?.props.visible ? (
        <Button size="xs" onClick={hideLayer}>
          Скрыть слой
        </Button>
      ) : (
        <Button size="xs" onClick={showLayer}>
          Показать слой
        </Button>
      )}
    </Box>
  )
}
