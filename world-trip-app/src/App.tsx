import React, { useEffect, useState } from 'react';
import './App.css';
import MapChart from './components/MapChart';
import ReactTooltip from "react-tooltip";

function App() {
  const [content,setContent] = useState<string>("")
  
  return (
    <div className="App">
        <MapChart setTooltipContent={setContent}></MapChart>
        <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
