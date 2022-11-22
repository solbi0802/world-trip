import React,{memo} from "react";
import {ComposableMap, Geographies,Geography, ZoomableGroup } from 'react-simple-maps';

const MapChart = ({setTooltipContent})  => {
  return (
    <div data-tip="">
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
                      fill: "#5493b5",
                      outline: "none"
                    }
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
  );
}

export default memo(MapChart);