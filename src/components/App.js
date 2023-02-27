import React, { createContext, useState } from "react";

import "../styles/App.css";
import Comp2 from "./Comp2";
const nameContext = createContext();

const App = () => {
    const [state,setStates] = useState("")
  return (
    <div id="main">
    <nameContext.Provider value={state}>
      <input id="input" onChange={(e)=>{setStates(e.target.value)}}/>
      <Comp2 />
      </nameContext.Provider>
    </div>
  );
};

export default App;
export { nameContext };
