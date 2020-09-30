import React from 'react';
//import Loadder from './Load' ;
const Regform = () => {
  const regform = {
    marginBottom: "10px",
    paddingBottom: "20px",
    position: "relative"
  }
  const main = {
    backgroundColor: "rgb(0,0,0,0.5)",
    width:"500px",
    height:"350px",
    marginTop:"5px",
    marginLeft:"41px",
    borderRadius: "15px 15px 15px 15px"
   }
  const reglabel = {
    color:"white",
    fontSize:"20px",
    marginLeft: "50px",
    position: "absolute",
  } 
  const reginput = {
    border: "2px solid #f0f0f0",
    borderRadius: "4px",
    display: "block",
    fontFamily: "inherit",
    fontSize: "14px",
    padding: "10px" ,
    width: "200px",
    marginLeft: "200px",

  }
  const blockdesign = {
    display: "inline-block",
    width:"700px",
    marginTop: "26px"
  }
  const submitbtn = {
    backgroundColor: "#00ad6b",
    display: "block",
    position:"relative",
    left:"30px",
    textAlign:"center",
    borderRadius:"12px",
    height:"54px",
    border: "2px solid #1fa83d",
    padding:"14px 50px 10px ",
    outline:"none",
    color:"white",
    cursor:"pointer",
    transition: "0.25px",
    marginLeft:"0px"
  }
  const putt={
    color:"red",
    fontSize:"30px",
    fontFamily:"Times",
    fontStyle:"italic",
    marginLeft:"50px",
    marginTop:"5px"
  }
  var Loadder = (event) => {
    event.preventDefault();
    const dates = new Date().toLocaleDateString()
    const form = document.getElementById('form');
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value; 
    document.getElementById('puthere').innerHTML=fname +' '+ lname +' '+ dates
  }
  const inpbut = {
    display:"flex"
 }
 const header = {
  width: "500px",
   backgroundColor: "rgb(0,0,0,0.48)",
   margin:"auto",
   color:"#FFFFFF",
   padding:"10px 0px 10px 0px",
   textAlign:"center",
   borderRadius:"15px 15px 0px 0px"
}
return <form style={main} id="form">
        <div style={regform}>
          <h1 style={header}>Name & Date</h1>
          <div style={blockdesign}>
            <label style={reglabel}>First Name</label>
            <input style={reginput} id="fname" type="text" placeholder="Aniket" autoComplete="off" />
          </div>
        </div>
        <div style={regform}>
          <div style={blockdesign}>
            <label style={reglabel}>Last Name</label>
            <input type="text" id="lname" style={reginput} placeholder="Namdeo" autoComplete="off" />                
          </div>
        </div>
        <div style={inpbut}>
        <button onClick={Loadder} style={submitbtn} >Submit</button>
        <p id="puthere" style={putt}></p> 
        </div>
       </form>
}

export default Regform