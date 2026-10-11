declare module 'leaflet' {
  export interface MapOptions {
    center?: [number, number]
    zoom?: number
    zoomControl?: boolean
    scrollWheelZoom?: boolean
    attributionControl?: boolean
  }

  export interface TileLayerOptions {
    attribution?: string
    subdomains?: string
    maxZoom?: number
  }

  export interface CircleOptions {
    color?: string
    fillColor?: string
    fillOpacity?: number
    weight?: number
    radius?: number
  }

  export interface DivIconOptions {
    className?: string
    html?: string
    iconSize?: [number, number]
    iconAnchor?: [number, number]
  }

  export interface Map {
    addTo(map: Map): this
  }

  export interface Marker {
    addTo(map: Map): this
    bindPopup(content: string, options?: object): this
  }

  export interface Circle {
    addTo(map: Map): this
  }

  export interface TileLayer {
    addTo(map: Map): this
  }

  export function map(element: HTMLElement, options?: MapOptions): Map
  export function tileLayer(urlTemplate: string, options?: TileLayerOptions): TileLayer
  export function circle(latlng: [number, number], options?: CircleOptions): Circle
  export function marker(latlng: [number, number], options?: { icon?: DivIcon }): Marker
  export function divIcon(options?: DivIconOptions): DivIcon

  export interface DivIcon {}

  const L: {
    map: typeof map
    tileLayer: typeof tileLayer
    circle: typeof circle
    marker: typeof marker
    divIcon: typeof divIcon
  }

  export default L
}

declare module 'leaflet/dist/leaflet.css'
