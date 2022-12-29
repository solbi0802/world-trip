import React,{Dispatch, memo, SetStateAction, useState} from "react";
import {ComposableMap, Geographies,Geography, ZoomableGroup } from 'react-simple-maps';

const geoUrl = "/features.json";

const MapChart = ({setTooltipContent}: {setTooltipContent: Dispatch<SetStateAction<string>>})  => {
  const [countryList, setCountryList] = useState([])

  const handleClick = (geo) => {
    console.log('클릭',geo.properties.name)
    if(!countryList.includes(geo.properties.name)) 
    setCountryList([...countryList, geo.properties.name])
  };

  return (
    <div data-tip="">
    <h2>세계 여행 기록</h2>
    <div className="map-view">
    <ComposableMap>
         <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isClicked = countryList === geo.properties.name;
                console.log('isClicked',isClicked)
                return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isClicked ? "#E42": "#b7b7bb"}
                  onMouseEnter={() => {
                    setTooltipContent(geo.properties.kor ? `${geo.properties.kor}` : `${geo.properties.name}`);
                  }}
                  onMouseLeave={() => setTooltipContent("")}
                  onClick={() => handleClick(geo)}
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
                )
            })
          }
          </Geographies>
    </ComposableMap>
    </div>
    <div className="trip-list">
    <p>여행한 나라</p>
    </div>
    </div>
  );
}

export default memo(MapChart);