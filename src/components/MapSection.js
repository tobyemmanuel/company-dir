import React, {useState} from 'react'
import { GoogleMap, InfoWindow, useJsApiLoader, Marker } from '@react-google-maps/api'; //load google map

const containerStyle = { //ensure container size is moderate
  height: '400px'
};

const center = { //set map center on load
  lat: 40.712776,
  lng: -74.005974
};

export default function MapSection({companyData}) { //receive data from app.js and export function

  //rearrange the object for better formatting
  var markers = companyData.map(item => {
    var obj = {}
    for (let key in item) {
      if(key!== "location"){
        if(key === "fees"){
          obj[key] = `${item[key]['amount']} ${item[key]['currency']}`
          }else{
        obj[key] = item[key]     
        }
      }else{
        obj['position'] = {"lat":item[key]['latitude'], "lng": item[key]['longitude']}
      }
    }
    return obj
  })

  //load google maps js API
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDinPGh24IbaLPt0aJ7FYU7Y7jgO69SNtA"
  })

    //load and unload map
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  //set active marker
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return isLoaded ?  (
    <div>
      <section id="map-section" className="low-padding">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>View the companies on the map</h2>
            <p>Company <span>Location</span></p>
          </div>

          <div className="map mb-3">
          <GoogleMap //initialize google map
          //load basic parameters
            mapContainerStyle={containerStyle}
            zoom={3}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={() => setActiveMarker(null)}
          >
         {markers.map(({ id, company, address, stockSymbol, sector, position, fees }) => (//include map markers
          <Marker
           key={id}
           position={position}
           onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? ( //include marker information window
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div className="map-popup"><p><b>{company} ({stockSymbol})</b></p>
              <p><i className="bi bi-pin-map"></i> {address}</p>
              <p><i className="bi bi-award"></i> {sector}</p>
              <p><i className="bi bi-cash"></i> {fees}</p>
              </div>
              </InfoWindow>
           ) : null}
          </Marker>
          ))}
          <></>
          </GoogleMap>
          </div>

        </div>
      </section>
    </div>
  ): <></>
}
