import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import React from 'react'

const Map = (props) => {
  const {isLoaded}=useLoadScript({googleMapsApiKey:'AIzaSyB0Ci-UdHgrE-cjxZeXZpq9LOeZOB4PcBM'})
  if(!isLoaded) return <div>Loading...</div>
  return (
    <GoogleMap zoom={10} center={{lat:parseInt(props.lat),lng:parseInt(props.lng)}} mapContainerClassName='map-container'>
    </GoogleMap>
  )
}

export default Map