import { BaseTile } from './types'

const OSM: BaseTile = {
  abbr: 'OSM',
  id: 'OSM-1',
  layer: {
    data: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
    id: 'OSM',
    type: 'TileLayer'
  },
  src: '/static/images/maps/open-street-maps.jpg',
  title: 'Open Street Map'
}

const GoogleMaps: BaseTile[] = [
  {
    abbr: 'Hybrid',
    id: 'Google-1',
    layer: {
      data: [
        'https://mt0.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
        'https://mt1.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
        'https://mt2.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
        'https://mt3.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}'
      ],
      id: 'Hybrid',
      type: 'TileLayer'
    },
    src: '/static/images/maps/google-maps.jpg',
    title: 'Google Hybrid'
  },
  {
    abbr: 'Sattelite',
    id: 'Google-2',
    layer: {
      data: [
        'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        'https://mt2.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        'https://mt3.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
      ],
      id: 'Sattelite',
      type: 'TileLayer'
    },
    src: '/static/images/maps/google-maps.jpg',
    title: 'Google Sattelite'
  },
  {
    abbr: 'Streets',
    id: 'Google-3',
    layer: {
      data: [
        'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        'https://mt2.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        'https://mt3.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
      ],
      id: 'Streets',
      type: 'TileLayer'
    },
    src: '/static/images/maps/google-maps.jpg',
    title: 'Google Streets'
  },
  {
    abbr: 'Terrain',
    id: 'Google-4',
    layer: {
      data: [
        'https://mt0.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
        'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
        'https://mt2.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
        'https://mt3.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
      ],
      id: 'Terrain',
      type: 'TileLayer'
    },
    src: '/static/images/maps/google-maps.jpg',
    title: 'Google Terrain'
  }
]

const ESRI = [
  {
    abbr: 'Dark',
    id: 'ESRI-1',
    layer: {
      data: 'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      id: 'Dark Gray',
      type: 'TileLayer'
    },
    src: '/static/images/maps/google-maps.jpg',
    title: 'ESRI Dark Gray'
  },
  {
    abbr: 'Light',
    id: 'ESRI-2',
    layer: {
      data: 'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      id: 'Light Gray',
      type: 'TileLayer'
    },
    src: '/static/images/maps/google-maps.jpg',
    title: 'ESRI Light Gray'
  }
]

export const baseTiles: BaseTile[] = [OSM, ...GoogleMaps, ...ESRI]
