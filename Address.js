import React from 'react';
const Address = () => {
    const addLine1 = {
      color: "#00ff00",
      fontFamily: "Times",
      fontWeight: "bold"
    }
      const addLine2 = {
        color: "#006600",
        fontFamily: "Times",
        fontWeight: "bold"
      }
      const addLine3 = {
        color: "#003300",
        fontFamily: "Times",
        fontWeight: "bold"
      } 
  return <div>
    <h2 style={addLine1}>B-302 Sagar Apartments</h2>
    <h2 style={addLine2}>Adjacent T.O.T. Mall,C Block</h2>
    <h2 style={addLine3}>Sec-62 Noida, 201309</h2>
  </div>
}
export default Address