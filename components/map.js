import React from 'react'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { components: undefined }
    this.markers = new WeakMap()
  }

  componentDidMount () {
    let {
      Map: LeafletMap,
      Marker,
      TileLayer,
      Tooltip,
      GeoJSON
    } = require('react-leaflet')
    this.setState({
      components: {
        LeafletMap,
        Marker,
        TileLayer,
        Tooltip,
        GeoJSON
      }
    })
  }

  componentDidUpdate (prevProps, prevState) {
    // this.onUpdateTimeout = setTimeout(() => {
    //   if (
    //     prevProps.selectedPlaceId &&
    //     !this.props.selectedPlaceId &&
    //     this.geoJSON &&
    //     this.map
    //   ) {
    //     let bounds = this.featureGroup.leafletElement.getBounds()
    //     this.map.leafletElement.fitBounds(bounds)
    //   }
    //
    //   if (!prevState.components && this.state.components) {
    //     this.map.leafletElement.on('zoomend', this.handleZoomEnd)
    //   }
    // }, 100)
  }

  componentWillUnmount () {
    // if (this.map && this.map.leafletElement) {
    //   this.map.leafletElement.off('zoomend', this.handleZoomEnd)
    // }

    // window.clearTimeout(this.onUpdateTimeout)
  }

  // handleZoomEnd = ({ target }) => {
  //   const contained = []
  //   Object.keys(target._layers).forEach(id => {
  //     let layer = target._layers[id]
  //     if (layer instanceof this.state.leaflet.LeafletMarker) {
  //       if (target.getBounds().contains(layer.getLatLng())) {
  //         contained.push(layer)
  //       }
  //     }
  //   })
  //
  //   if (this.props.onZoomEnd) this.props.onZoomEnd(contained, target.getZoom())
  // }

  render () {
    if (!this.state.components) {
      return null
    }

    const {
      LeafletMap,
      Marker,
      TileLayer,
      Tooltip,
      GeoJSON
    } = this.state.components
    const { center, zoom, maxZoom, feature } = Object.assign({
      center: [0,180],
      zoom: 3,
      maxZoom: 18,
      feature: null
    }, this.props)
    console.log({center, feature: JSON.stringify(feature)})
    return (
      <LeafletMap
        ref={node => {
          this.map = node
        }}
        css={`height: 100%; width: 100%; z-index: 0;`}
        center={center}
        zoom={zoom}
        maxZoom={maxZoom}
      >
        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
        {feature && <GeoJSON
          ref={node => {
            this.geoJSON = node
          }}
          key={feature.id}
          data={feature}
        >
        </GeoJSON>}
      </LeafletMap>
    )
  }
}
