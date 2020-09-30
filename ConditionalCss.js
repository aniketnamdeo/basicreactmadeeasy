import React, { useState } from 'react'

const ConditionalCss = () => {
  const [num,setNum] = useState(-25)
return <React.Fragment>
 {(num>=0) ? <DispNum number={num} col={"aquamarine"} sign={"+"} /> : <DispNum number={num} col={"red"} sign={""} /> }
</React.Fragment>
}

export default ConditionalCss

const DispNum = ({number,col,sign}) => {
return <div style={{fontSize:"50px",color:col}}>{sign}{number}%</div> 
};