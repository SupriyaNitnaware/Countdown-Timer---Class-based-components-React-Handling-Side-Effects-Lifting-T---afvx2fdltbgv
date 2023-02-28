import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

let game;
const App = () => {
  // write your code here 
  const [state, setState] = useState()
  function onKeyDowns(e) {
    if (e.key === "Enter") {
      clearInterval(game)
      //console.log(typeof Number(e.target.value))
      console.log(e.target.value)
      if (!Number(e.target.value)|| e.target.value<0) {
        setState(0)
        
      }else{
        console.log("i am numbers")
        setState(Math.floor(e.target.value))
         game = setInterval(() => {
          setState(state => state - 1)
          
        },1000)
      }
    }
  }
  useEffect(()=>{
    if(state===0){
      console.log("effect")
      clearInterval(game)
    }
  })
  return (

    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={onKeyDowns} /> sec.
        </h1>
      </div>
      <div id="current-time">{state}</div>
    </div>
  )
}


export default App;
