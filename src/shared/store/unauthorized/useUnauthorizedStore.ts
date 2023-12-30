import { create } from 'zustand'
import { UnauthorizedStoreState } from './types'
import { useMapStore } from '../map'
import { FlyToInterpolator } from '@deck.gl/core/typed'
import { getLayerCenterByBounds } from '@shared/utils/deck'
import { lat2Zoom } from '@shared/utils/utils'
// @ts-ignore
import { bbox, bboxPolygon } from '@turf/turf'

const initialState = {
  layer: undefined,
  file: undefined
}

export const useUnauthorizedStore = create<UnauthorizedStoreState>()(
  (set, get) => ({
    ...initialState,

    setLayer(layer) {
      set({ layer })
    },

    setFile(file) {
      set({ file })
    },

    flyToLayer() {
      const layer = get().layer
      if (layer) {
        const pitch = 0

        const { bounds } = layer.props
        const center = getLayerCenterByBounds(bounds)
        const dx = bounds[2] - bounds[0]
        const dy = bounds[3] - bounds[1]
        const zoom = lat2Zoom(Math.max(dx, dy))

        const [longitude, latitude] = center

        const flyToViewState = {
          latitude,
          longitude,
          pitch,
          transitionDuration: 1000,
          transitionInterpolator: new FlyToInterpolator(),
          zoom
        }

        useMapStore.getState().setViewState(flyToViewState)
      }
    },

    clearStore() {
      set(initialState)
    },

    exportLayerData() {
      const { layer, file } = get()
      if (layer) {
        const fc = layer.props.features
        const features = {
          ...fc,
          features: fc.features.map((f) => {
            const { id, ...features } = f
            return features
          })
        }
        const element = document.createElement('a')
        const textFile = new Blob([JSON.stringify(features)], {
          type: file?.type
        })
        element.href = URL.createObjectURL(textFile)
        element.download = `${file?.name}`
        document.body.appendChild(element)
        element.click()
      }
    },

    updateFeatures(featureCollection) {
      let layer = get().layer?.clone({
        bounds: bbox(featureCollection) || bboxPolygon(featureCollection),
        data: featureCollection as any,
        features: featureCollection as any
      })

      set({ layer })
    },

    hideLayer() {
      const layer = get().layer?.clone({ visible: false })
      set({ layer })
    },

    showLayer() {
      const layer = get().layer?.clone({ visible: true })
      set({ layer })
    }
  })
)
