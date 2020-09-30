import React from 'react';

const Name = () => {
  const fname = {
    color: "blue",
    fontFamily: "Times",
    fontWeight: "bold"
  }
  const lname = {
    color: "orange",
    fontFamily: "Times",
    fontWeight: "bold",
    position: "relative",
    left: "10px"
  }
  return <h1 style={fname}>ANIKET
  <span style={lname}>NAMDEO</span>
  </h1>
}

export default Name