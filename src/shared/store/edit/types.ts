import { Feature, FeatureCollection } from '@nebula.gl/edit-modes'
import { Mode } from '../../types'

export interface EditStoreState {
  featureCollection: FeatureCollection
  mode: Mode
  editedLayer?: { layerId: string }

  addFeatureToCollection: (feature: Feature) => void
  setFeatureCollection: (featureCollection: FeatureCollection) => void
  setMode: (editMode: Mode) => void
  setEditedLayer: ({ layerId }: { layerId: string }) => void
  clearStore: () => void
}
