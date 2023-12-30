import { useEditStore } from '@shared/store/edit/useEditStore'
import { useMapStore } from '@shared/store/map'
import { useUnauthorizedStore } from '@shared/store/unauthorized'
import { Box } from '@shared/ui'
import { DeckGlMap, EditMenu, MapMenu } from '@widgets/map'
import { useEffect } from 'react'

const Map = () => {
  const { mode } = useEditStore()
  const { clearMap } = useMapStore()

  useEffect(() => {
    return () => {
      clearMap()
    }
  }, [])

  return (
    <Box className="w-screen h-screen overflow-hidden">
      <MapMenu />
      {mode.type === 'edit' && <EditMenu />}
      <DeckGlMap />
    </Box>
  )
}

export default Map
