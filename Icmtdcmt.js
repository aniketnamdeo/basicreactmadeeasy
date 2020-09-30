import React, { useState } from 'react';
// import Icmtfunc from './Icmtfunc';
// import Dcmtfunc from './Dcmtfunc';

const Icmtdcmt = () => {
  const submitbtn1 = {
    backgroundColor: "rgb(0,0,0,0.6)",
    display: "block",
    textAlign:"center",
    borderRadius:"12px",
    border: "2px solid red",
    padding:"14px 50px",
    outline:"none",
    position:"relative",
    color:"white",
    cursor:"pointer",
    
  }
  const submitbtn2 = {
    backgroundColor: "rgb(0,0,0,0.7)",
    display: "block",
    textAlign:"center",
    borderRadius:"12px",
    border: "2px solid #1fa83d",
    padding:"14px 50px",
    outline:"none",
    color:"white",
    cursor:"pointer",
    marginLeft:"110px",
    position:"relative",
    transition: "0.25px",
  
  }
  const reginput = {
    border: "2px solid skyblue",
    borderRadius: "4px",
    textAlign:"center",
    display: "block",
    position:"relative",
    fontFamily: "inherit",
    fontSize: "54px",
    padding: "10px" ,
    width: "100px",
    marginLeft:"190px",
    marginTop:"23px",
    color:"brown", 
  }
  const ictdct = {
    marginTop: "5px",
    marginRight:"31px",
    backgroundColor: "rgb(0,0,0,0.5)",
    width:"500px",
    height:"280px",
    borderRadius: "15px 15px 15px 15px"
  }
  var Icmtfunc = (event) => {
    event.preventDefault();
    var numm = String(Number(document.getElementById('number').innerHTML)+5);
    document.getElementById('number').innerHTML=numm
  }
  var Dcmtfunc = (event) => {
    event.preventDefault();
    var numm = String(Number(document.getElementById('number').innerHTML)-5);
    document.getElementById('number').innerHTML=numm
  } 
  const inpbut = {
    display:"flex",
    marginLeft:"20px",
    marginTop:"100px"
 }
return <div style={ictdct}>
          <h5 id="number" style={reginput} > 0 </h5>
          <div style={inpbut}>
            <button onClick={Dcmtfunc} style={submitbtn1}>Decrement</button>
            <button onClick={Icmtfunc} style={submitbtn2}>Increment</button>
          </div>
      </div>
}

export default Icmtdcmt