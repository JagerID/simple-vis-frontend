import { create } from 'zustand'
import { MapStoreState } from './types'
import { COORDINATE_SYSTEM } from '@deck.gl/core/typed'
import { baseTiles } from './config'
import { useEditStore } from '../edit/useEditStore'
import { FEATURE_COLLECTION } from '@shared/utils/deck'
import { useUnauthorizedStore } from '../unauthorized'

export const INITIAL_VIEW_STATE = {
  bearing: 0,
  latitude: 55.751244,
  longitude: 37.618423,
  pitch: 0,
  zoom: 11
}

const initialState: Pick<MapStoreState, 'deck' | 'layers'> = {
  deck: {
    baseTile: baseTiles[3],
    controller: {
      doubleClickZoom: false,
      inertia: true
    },
    coordinateSystem: COORDINATE_SYSTEM.DEFAULT,
    viewState: INITIAL_VIEW_STATE
  },
  layers: []
}

export const useMapStore = create<MapStoreState>()((set) => ({
  ...initialState,

  setViewState(viewState) {
    set((state) => ({ deck: { ...state.deck, viewState } }))
  },

  clearMap() {
    set(initialState)
    useEditStore.getState().clearStore()
    useUnauthorizedStore.getState().clearStore()
  }
}))
