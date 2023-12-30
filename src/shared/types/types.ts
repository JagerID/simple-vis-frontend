/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layer, PickingInfo } from '@deck.gl/core/typed'
import { GeoJsonLayer, GeoJsonLayerProps } from '@deck.gl/layers/typed'
import { EditMode, FeatureCollection } from '@nebula.gl/edit-modes'
import { FC, SVGProps } from 'react'

export interface Mode {
  icon?: FC<SVGProps<SVGSVGElement>>
  name: string
  editMode: EditMode<any, any>
  type: 'edit' | 'view' | 'measure'
}

export type CursorState = {
  isHovering: boolean
  isDragging: boolean
}

export interface GeoLayerProps extends GeoJsonLayerProps {
  bounds: number[]
  features: FeatureCollection
}

export interface GeoLayer extends GeoJsonLayer<GeoLayerProps> {}

export interface PickingGeoLayerInfo extends PickingInfo {
  layer: Layer<{
    name?: string
    id?: string
    features?: FeatureCollection
  }> | null
}

export interface Mode {
  icon?: FC<SVGProps<SVGSVGElement>>
  name: string
  editMode: EditMode<any, any>
  type: 'edit' | 'view' | 'measure'
}
