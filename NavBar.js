import React from 'react'

const NavBar = () => {
  const header = {
    backgroundImage:"linear-gradient(90deg, rgba(255,0,255,0.7), rgba(0,0,255,0.8), rgb(0,255,255,0.7))",
    // borderRadius:"40px",
    // margin:"0px 180px 0px 180px"
  }
  const list = {
    listStyle:"none",
    width:"100%",
    display:"flex",
    height:"9vH",
    justifyContent:"space-around",
    alignItems:"center", 
  }
  const links = {
    color:"white",
    fontFamily:"sans-serif",
    fontSize:"30px",
    fontWeight:"550",
    textDecoration:"none",
    letterSpacing:"9px",
    textShadow:"4px 4px 7px skyblue"
  }
  return (
  <header style={header}>
    <ul style={list}>
      <li><a href="#" style={links}>Home</a></li>
      <li><a href="#" style={links}>About</a></li>
      <li><a href="#" style={links}>Contact Us</a></li>
      <li><a href="#" style={links}>Our Service</a></li>
    </ul>
  </header>
  )}

export default NavBar;