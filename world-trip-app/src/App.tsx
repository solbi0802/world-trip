import React, { useEffect, useState } from 'react';
import './App.css';
import MapChart from './MapChart';
import ReactTooltip from "react-tooltip";

function App() {
  const [content,setContent] = useState<string>("")
  useEffect(() => {
console.log('content',content)
  },[content])
  return (
    <div className="App">
        <MapChart setTooltipContent={setContent}></MapChart>
        <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
