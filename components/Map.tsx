//@ts-nocheck

import React, { useState } from 'react';
import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import * as geolib from 'geolib';

const Map = () => {
  const[viewport,setViewport] = useState({
    width:'100%',
    height:'100%',
    latitude:center.latitude,
    longitude:center.longitude,
    zoom: 11,
  });
  const[selectedLocation,setSelectedLocation] = useState();

  const coordinates = searchResults.map((result)=>({
    longitude:result.long,
    latitude:result.lat,
  }));

  const center = geolib.getCenter(coordinates);

  return (
    <ReactMapGL
    mapStyle='mapbox style url paste here'
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(i)=>setViewport(i)}
    >
      {
        searchResults.map((result)=>(
          <div key={result.long}>
            <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
            >
              <p 
              role='img'
              aria-label='push-pin'
              onClick={()=>setSelectedLocation(result)} className='cursor-pointer text-2xl animate-bounce'>point</p>
            </Marker>
            {/* Popup after clicking on Marker */}
            {
              selectedLocation.long === result.long ? (
                <Popup
                onClose={()=>setSelectedLocation({})}
                closeOnClick={true}
                latitude={result.lat}
                longitude={result.long}
                >{result.title}</Popup>
              ):(false)
            }
          </div>
        ))
      }
    </ReactMapGL>
  )
}

export default Map