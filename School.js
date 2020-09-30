import React from 'react';
// import Class10 from './Class10'
import Class12 from './Class12'
const School = () => {
 const marks = {English:88,Science:94,Computer:90}
 marks.Maths = 99;
 marks.Hindi = 78;
 const marksTw = {Physics:95,Chemistry:83,Maths:96}
 marksTw.PhysicalEd = 88;
 marksTw.English = 90;
 return <>
 <div style={{width:"440px",background:"rgb(0,0,0,0.6)",borderRadius: "15px 15px 15px 15px",marginLeft:"72.5px",}}>
  <h1 style={{color:"cyan", textAlign:"center", background:"rgb(0,0,0,0.6)", borderRadius: "15px 15px 0px 0px", marginTop:"0px" }}>School Marks</h1>
  <div style={{color:"cyan"}}>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Class 10th &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Class 12th</div>
  <div style={{display:"flex",color:"cyan",fontSize:"18.537px" }}>
  <Class10 markTen={marks} />
  <Class12 markTwelve = {marksTw} />
  </div>
  </div>
  </>
}
export default School

const Class10 = ({markTen}) => {
  // console.log(
  //   Object.entries(markTen)
  //   .map( ([key, value]) => `My key is ${key} and my value is ${value}` )
  // )
  return <>
    <ul>
      {
        Object.entries(markTen).map(([key,value]) => 
        <li>{value} Marks in {key}</li>)
      }
    </ul>
  </>
}