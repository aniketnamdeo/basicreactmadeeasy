import React from 'react';

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

export default Class10