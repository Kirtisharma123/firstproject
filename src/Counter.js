import { useState } from "react";
import React  from 'react'

export default function Counter() {
    const[num,setNum]=useState(5);
    function Add(){
        setNum(num+1)
    }
    function Sub(){
        setNum(num-1)
    }
  return (
    <>
    <div>{num}</div>
      <button onClick={Add}>Add</button>
      <button onClick={Sub}>SUBTRACT</button>
    
    
    </>
  )
}

