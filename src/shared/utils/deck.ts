import { useMapStore } from '@shared/store/map'
import { BaseTile } from '@shared/store/map/types'
import { TileLayer } from '@deck.gl/geo-layers/typed'
import { LayerProps } from '@deck.gl/core/typed'
import { BitmapLayer, GeoJsonLayer } from '@deck.gl/layers/typed'
// @ts-ignore
import { bbox, bboxPolygon, center } from '@turf/turf'

import { FeatureCollection } from '@nebula.gl/edit-modes'

export const FEATURE_COLLECTION: FeatureCollection = {
  features: [],
  type: 'FeatureCollection'
}

export const createTileLayer = (baseTile: BaseTile) => {
  const { coordinateSystem } = useMapStore.getState().deck
  return new TileLayer({
    tileSize: 256,
    ...baseTile.layer,

    renderSubLayers: (props: LayerProps & { tile: any; data: undefined }) => {
      const {
        bbox: { east, north, south, west }
      } = props.tile

      return new BitmapLayer(props, {
        _imageCoordinateSystem: coordinateSystem,
        bounds: [west, south, east, north],
        data: undefined,
        image: props.data
      })
    }
  })
}

export const createVectorDeckLayer = (
  layerId: string,
  data: any,
  name?: string
) => {
  const dataWithFeatures = data.features ? data : FEATURE_COLLECTION
  const bounds = bbox(dataWithFeatures) || bboxPolygon(dataWithFeatures)

  return new GeoJsonLayer({
    id: layerId,
    type: 'VECTOR',
    data: dataWithFeatures,
    features: dataWithFeatures,
    autoHighlight: true,
    visible: true,
    filled: true,
    pickable: true,
    stroked: true,
    opacity: 0.75,
    getLineWidth: 0.5,
    getPointRadius: 30,
    filledOpacity: 0.25,
    bounds,
    name,
    transitions: {
      getFillColor: 100,
      getLineColor: 100
    },
    colorFormat: 'RGBA'
  })
}

export const getLayerCenterByBounds = (bounds: any) => {
  const layerCenter = center(bboxPolygon(bounds))
  return layerCenter.geometry.coordinates
}
