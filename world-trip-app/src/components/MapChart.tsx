import React,{Dispatch, memo, SetStateAction, useState} from "react";
import {ComposableMap, Geographies,Geography, ZoomableGroup } from 'react-simple-maps';

const MapChart = ({setTooltipContent}: {setTooltipContent: Dispatch<SetStateAction<string>>})  => {
  const [countryList, setCountryList] = useState<Array<string>>([])
  return (
    <div data-tip="">
    <h2>세계 여행 기록</h2>
    <div className="map-view">
    <ComposableMap>
      <ZoomableGroup>
         <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(geo.properties.kor ? `${geo.properties.kor}` : `${geo.properties.name}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onMouseDownCapture={() => {
                    console.log('클릭',geo.properties.name)
                    if(!countryList.includes(geo.properties.name)) 
                    setCountryList([...countryList, geo.properties.name])
                  }}
                  style={{
                    default: {
                      fill: "#b7b7bb",
                      outline: "none"
                    },
                    hover: {
                      fill: "#97a3ea",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    },
                  }}
                />
              ))
            }
          </Geographies>
      {/* <Marker coordinates={[0, 0]}>
            <circle r={3} fill="#d586d3" />
          </Marker> */}
        </ZoomableGroup>
    </ComposableMap>
    </div>
    <div className="trip-list">
    <p>여행한 나라</p>
    {countryList.join()}
    </div>
    <img src="/airplain-out.gif"/>
    <img src="/airplain-in.gif"/>
    </div>
  );
}

export default memo(MapChart);