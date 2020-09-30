import React, { useState } from 'react';
// import CompOneZ from './CompOneZ';

const ToggleButtonZ = () => {
  const submitbtn1 = {
    backgroundColor: "rgb(0,0,0,0.6)",
    display: "block",
    textAlign:"center",
    borderRadius:"12px",
    border: "3px solid rgb(0,255,0)",
    padding:"14px 50px",
    outline:"none",
    position:"relative",
    color:"white",
    cursor:"pointer",
    height:"60px",
    marginLeft:"70px",
    marginTop:"83px"
    
  }
  const box = {
    width:"200px",
    marginLeft:"166px",
    backgroundImage: "linear-gradient(80deg, rgba(255,100,50,0.7), rgb(255,0,117,0.85), rgba(255,153,0.9), rgb(255,255,0,0.8))",
    width:"364px",
    height:"320px",
    borderRadius: "15px 15px 15px 15px",
  }
  const box1 = {
    paddingLeft:"40px",
  }
  const [prp, setPrp] = useState('');
  const [num, setNum] = useState(0);
  var prop1 = "From Prop 1"
  var prop2 = "Prop 2 Show"
  return (<div style={box}>
            <div style={{fontSize:"17px",color:"white",textAlign:"center",left:"0px",textShadow:"4px 4px 8px red",}}>Conditional Rendering of components With Props</div>
            <div style={box1}>
              {(num%2==0) ? <CompOneZ propZ ={prop1} num={5} /> : <CompOneZ propZ ={prop2} num={6}/>}
          
              <button onClick = {() => {setNum(num+1);}} style={submitbtn1}>Click Me</button>
          </div>
         </div>
         );
}
export default ToggleButtonZ

const CompOneZ = ({propZ,num}) => {
  const disp = {
    color:"rgb(0,204,204)",
    letterSpacing:"11px",
    textShadow:"4px 4px 19px rgb(0,255,255)",
    fontSize:"29px",
    fontWeight:"800",
    paddingRight:"20px",
    paddingTop:"30px"
  } 
return <div style={disp}>{propZ} + {num}</div>
}