import { ViewStateChangeParameters } from '@deck.gl/core/typed/controllers/controller'
import { TileLayer } from '@deck.gl/geo-layers/typed'
import { DeckGL } from '@deck.gl/react/typed'
import { useEditStore } from '@shared/store/edit/useEditStore'
import { useMapStore } from '@shared/store/map'
import { useUnauthorizedStore } from '@shared/store/unauthorized'
import { CursorState, PickingGeoLayerInfo } from '@shared/types'
import { createTileLayer } from '@shared/utils/deck'
import { MouseEvent, useCallback, useEffect, useState } from 'react'
import { EditableGeoJsonLayer } from '@nebula.gl/layers'
import { EditAction, FeatureCollection } from '@nebula.gl/edit-modes'
import { Box } from '@shared/ui'

const sublayerProps = {
  geojson: {
    getFillColor: [46, 78, 93, 0.3 * 255],
    getLineColor: [46, 78, 93]
  },
  guides: {
    _subLayerProps: {
      'points-circle': {
        getFillColor: [255, 255, 255],
        radiusMinPixels: 3,
        radiusUnits: 'pixels'
      },
      'polygons-fill': {
        getFillColor: [255, 97, 97, 0.3 * 255]
      }
    },
    getLineColor: [255, 0, 0, 100]
  },
  tooltips: {
    background: true,
    backgroundPadding: [10, 1],
    getAlignmentBaseline: 'bottom',
    getColor: [46, 78, 93, 255],
    getSize: 10,
    getTextAnchor: 'end'
  }
}

export const DeckGlMap = () => {
  const [baseTile, setBaseTile] = useState<TileLayer>()
  const { deck, layers, setViewState } = useMapStore()
  const { layer } = useUnauthorizedStore()
  const { featureCollection, mode, setFeatureCollection } = useEditStore()
  const [editableLayer, setEditableLayer] = useState<any>()
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const selectedFeatureIndexes = [selectedIndex]

  const handleViewStateChange = useCallback(
    ({ viewState }: ViewStateChangeParameters) => setViewState(viewState),
    [setViewState]
  )

  useEffect(() => {
    const baseTile = createTileLayer(deck.baseTile)
    setBaseTile(baseTile)
  }, [deck.baseTile, deck.coordinateSystem])

  useEffect(() => {
    console.log(selectedFeatureIndexes)
  }, [selectedFeatureIndexes])

  useEffect(() => {
    setEditableLayer(
      new (EditableGeoJsonLayer as any)({
        _sublayerProps: sublayerProps,
        autoHighlight: true,
        data: featureCollection,
        highlightColor: [256, 0, 0, 100],
        highlightedObjectIndex: selectedFeatureIndexes,
        id: 'geojson-layer',
        mode: mode.editMode,

        onClick: (info: PickingGeoLayerInfo, event: Record<string, any>) => {
          if (event.rightButton) {
            const updatedFeatureCollection = {
              ...featureCollection,
              features: featureCollection.features.filter(
                (f) => f.id !== info.object.id
              )
            }
            setFeatureCollection(updatedFeatureCollection)
          }
          setSelectedIndex(info.index)
        },
        onEdit: ({ updatedData }: EditAction<FeatureCollection>) => {
          setFeatureCollection(updatedData)
        },
        pickable: true,
        selectedFeatureIndexes: selectedFeatureIndexes
      })
    )
  }, [featureCollection, mode.name, selectedIndex])

  const getCursor = ({ isDragging }: CursorState) => {
    if (isDragging) {
      return 'grab'
    }
    if (mode.name === 'Просмотр' || mode.name === 'Редактирование') {
      return 'grab'
    }
    if (mode.type === 'edit') {
      return 'crosshair'
    } else if (mode.type === 'view') {
      return 'grab'
    }
    return 'default'
  }

  return (
    <Box onContextMenu={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
      <DeckGL
        id="deck-gl-map"
        viewState={deck.viewState}
        getCursor={getCursor}
        controller={deck.controller}
        onViewStateChange={handleViewStateChange}
        layers={[
          baseTile,
          layers,
          layer,
          editableLayer &&
            (mode.type === 'edit'
              ? editableLayer.clone({ visible: true })
              : editableLayer.clone({ visible: false }))
        ]}
      />
    </Box>
  )
}
