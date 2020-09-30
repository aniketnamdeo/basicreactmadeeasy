import React from 'react';

const CompOneZ = ({propZ}) => {
  const disp = {
    color:"rgb(0,204,204)",
    letterSpacing:"11px",
    textShadow:"4px 4px 19px rgb(0,255,255)",
    fontSize:"29px",
    fontWeight:"800",
    paddingRight:"20px",
    paddingTop:"30px"
  } 
  return <div style={disp}>{propZ}</div>
}

export default CompOneZ