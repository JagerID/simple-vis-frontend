import { ViewMode } from '@nebula.gl/edit-modes'
import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { EditStoreState } from './types'
import { FEATURE_COLLECTION } from '@shared/utils/deck'

const initialState: Pick<
  EditStoreState,
  'featureCollection' | 'mode' | 'editedLayer'
> = {
  editedLayer: undefined,
  featureCollection: FEATURE_COLLECTION,
  mode: {
    editMode: new ViewMode(),
    name: 'Просмотр',
    type: 'view'
  }
}

export const useEditStore = create<EditStoreState>()(
  devtools((set, get) => ({
    ...initialState,

    addFeatureToCollection: (feature) => {
      const featureCollection = {
        ...get().featureCollection,
        features: [...get().featureCollection.features, feature]
      }
      set({ featureCollection })
    },

    setEditedLayer: (editedLayer) => set({ editedLayer }),

    setFeatureCollection: (featureCollection) => {
      console.log(featureCollection)

      const settedFeatureCollection = {
        ...featureCollection,
        features: featureCollection.features.map((feature) =>
          feature.id ? feature : { ...feature, id: uuidv4() }
        )
      }
      set({ featureCollection: settedFeatureCollection })
    },

    setMode: (mode) => set((state) => ({ ...state, mode })),

    clearStore() {
      set(initialState)
    }
  }))
)
