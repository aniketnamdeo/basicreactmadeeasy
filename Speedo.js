import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"

const Speedo = () => {
  return <React.Fragment>
    <ReactSpeedometer
  value={230}
  maxSegmentLabels={13}
  maxValue={240}
  segments={1000}
  ringWidth={3}
  needleHeightRatio={0.8}>
    <ReactSpeedometer
  value={230}
  maxSegmentLabels={13}
  maxValue={240}
  segments={1000}
  ringWidth={3}
  needleHeightRatio={0.8}
  width={10}
  
/>
  </ReactSpeedometer>
    <ReactSpeedometer
  value={454}
  needleHeightRatio={0.5}
  needleColor="steelblue"
  needleTransitionDuration={4000}
  needleTransition="easeElastic"
/>
     <ReactSpeedometer
    value={777}
    currentValueText="Happiness Level"
    customSegmentLabels={[
      {
        text: "Very Bad",
        position: "OUTSIDE",
        color: "#555",
      },
      {
        text: "Bad",
        position: "OUTSIDE",
        color: "#555",
      },
      {
        text: "Ok",
        position: "OUTSIDE",
        color: "#555",
        fontSize: "19px",
      },
      {
        text: "Good",
        position: "OUTSIDE",
        color: "#555",
      },
      {
        text: "Very Good",
        position: "OUTSIDE",
        color: "#555",
      },
    
    ]}
  />
  <ReactSpeedometer
  maxValue={500}
  width={400}
  ringWidth={5}
  value={250}
  needleColor="red"
  startColor="brown"
  segments={10}
  endColor="red"
/>
<ReactSpeedometer
    customSegmentStops={[0, 250, 500, 750, 1000]}
    segmentColors={["firebrick", "tomato", "gold", "limegreen"]}
    value={45}
  />
  </React.Fragment>
}

export default Speedo
