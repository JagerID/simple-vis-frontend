import { CoordinateSystem, MapViewState, View } from '@deck.gl/core/typed'
import { GeoLayer } from '@shared/types'

export type BaseTile = {
  id: string
  title: string
  abbr: string
  src: string
  layer: {
    id: string
    type: 'TileLayer' | string
    data: string | string[]
  }
}

type DeckState = {
  viewState: MapViewState | Record<string, any>
  controller: View['props']['controller']
  baseTile: BaseTile
  coordinateSystem: CoordinateSystem
}

export type MapStoreState = {
  deck: DeckState
  layers: GeoLayer[]

  setViewState: (viewState: MapViewState | Record<string, any>) => void
  clearMap: () => void
}
