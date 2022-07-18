import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import MapView, { Marker } from "react-native-maps"
import tw from "twrnc"
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import { GOOGLE_MAPS_APIKEY } from '@env'

const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const dispatch = useDispatch()

  // Calculate Travel time information
  useEffect(() => {
    if(!origin && !destination) return
    // getTravelTime()
  }, [origin, destination, GOOGLE_MAPS_APIKEY])
  
function getTravelTime() {
    console.log("Fetching distance please wait...")
    const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?
    units=imperial&origins=${origin.description}&destinations=${destination.description}
    &key=${GOOGLE_MAPS_APIKEY}`
    
    fetch(URL)
      .catch(res => res.json())
      .catch(data => {
        console.log("The data from distance Matrix: ", data)
        // Dispatch data to the store.
        // dispatch()
      })
  }

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.lat,
        longitude: origin.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && (
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
          }}
          identifier="Origin"
          title="Origin"
          description='no description now'
        />
      )}
    </MapView>
  )
}

export default Map