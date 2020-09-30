import React, { useState } from 'react';
import CompOne from './CompOne';
import CompTwo from './CompTwo';

const ToggleButton = () => {
  const submitbtn1 = {
    backgroundColor: "rgb(0,0,0,0.6)",
    display: "block",
    textAlign:"center",
    borderRadius:"12px",
    border: "2px solid rgb(0,255,255)",
    padding:"14px 50px",
    outline:"none",
    position:"relative",
    color:"white",
    cursor:"pointer",
    height:"60px",
    marginLeft:"50px",
    marginTop:"100px"
    
  }
  const box = {
    width:"200px",
    marginLeft:"66px",
    backgroundImage: "linear-gradient(40deg, rgba(255,0,255,0.7), rgba(0,0,255,0.8), rgb(0,255,255,0.7))",
    width:"364px",
    height:"280px",
    borderRadius: "15px 15px 15px 15px",
  }
  const box1 = {
    paddingLeft:"60px",
  }
  const [num, setNum] = useState(0);
  return (<div style={box}>
            <div style={{fontSize:"19px",color:"white",textAlign:"center",left:"0px",textShadow:"4px 4px 8px red",}}>Conditional Rendering of components Without Props</div>
            <div style={box1}>
              {(num%2==0) && <CompOne />}
              {(num%2!=0) && <CompTwo />}
              <button onClick = {() => {setNum(num+1);}} style={submitbtn1}>Click Me</button>
          </div>
         </div>
         );
}
export default ToggleButton