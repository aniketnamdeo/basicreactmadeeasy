import React, { useState } from 'react';

const Storenos = () => {
  const reginput = {
    border: "2px solid purple",
    borderRadius: "6px",
    textAlign:"center",
    display: "block",
    fontFamily: "inherit",
    fontSize: "14px",
    padding: "10px" ,
    width: "140px",
    height:"16px",
    marginLeft: "30px",
    marginTop:"12px",
    height:"75px"
    
  }
  const submitbtn = {
    backgroundColor: "brown",
    height:"75px",
    display: "block",
    position:"relative",
    left:"10px",
    textAlign:"center",
    borderRadius:"12px",
    border: "2px solid red",
    padding:"10px 30px",
    outline:"none",
    color:"white",
    cursor:"cell",
    transition: "0.25px",
    width:"150px",
    marginTop:"12px",
    
  }
  const [nos, setNos] = useState([])
  var [number, setNumber] = useState('')
  const numberHandle = (event) => {
    setNumber(event.target.value);
  };
  const addNumbertoArr = () => {
    setNos((nos) => [...nos, number]);
    setNumber('');
    console.log()
  };
  const main = {
    backgroundColor: "rgb(0,0,0,0.3)",
    width:"360px",
    height:"350px",
    margin:"auto",
    borderRadius: "15px 15px 15px 15px",
    paddingTop: "2px",
    marginTop:"5px",
    marginLeft:"41px",
    marginBottom:"10px"
   }
   const liststyle = {
     color:"purple",
     fontSize:"33px",
     fontStyle:"bold",   
     marginLeft:"20px"
    }
   const inpbut = {
      display:"flex"
   }
  return <div style={main}>
    <div style={inpbut}>
      <input onChange={numberHandle} style={reginput} id={"inpnum"} type="number" placeholder="Enter Number" value={number} />
      <button style={submitbtn}>Add Number</button>
    </div>
  <p style={liststyle}> {number} </p>
  <ul style={liststyle}>
      {nos.map((item,index) => (
        <li key={index}>{item}</li>
      ))}
  </ul>
  </div>
}

export default Storenos