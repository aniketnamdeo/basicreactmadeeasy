import React from 'react';

const Class12 = ({markTwelve}) => {
  // console.log(
  //   Object.entries(markTwelve)
  //   .map( ([key, value]) => `My key is ${key} and my value is ${value}` )
  // )
  return <> 
  <ul>
    {
      Object.entries(markTwelve).map(([key,value]) => 
      <li>{value} Marks in {key}</li>)
    }
  </ul>
  </>
}

export default Class12