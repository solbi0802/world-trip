import React from "react";
import {ComposableMap, Geographies,Geography, ZoomableGroup, Marker } from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const MapChart = ()  => {
  return (
    <ComposableMap projection="geoMercator">
         <ZoomableGroup center={[0, 0]} zoom={9}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      <Marker coordinates={[0, 0]}>
            <circle r={3} fill="#d586d3" />
          </Marker>
        </ZoomableGroup>
    </ComposableMap>
  );
}

export default MapChart;