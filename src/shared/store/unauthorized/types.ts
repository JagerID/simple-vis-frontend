import { GeoJsonLayer, GeoJsonLayerProps } from '@deck.gl/layers/typed'
import { FeatureCollection } from '@nebula.gl/edit-modes'
import { GeoLayer } from '@shared/types'

export type UnauthorizedStoreState = {
  layer?: GeoLayer
  file?: File

  setLayer: (layer: GeoLayer) => void
  setFile: (file: File) => void
  flyToLayer: () => void
  clearStore: () => void
  exportLayerData: () => void
  updateFeatures: (featureCollection: FeatureCollection) => void
  hideLayer: () => void
  showLayer: () => void
}
