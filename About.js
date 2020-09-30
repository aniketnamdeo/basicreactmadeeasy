import React from 'react';
//arrow function inplace of function()
// .js file is not called .js file its called as a component
//What is components & type of components
//what is mit lisence
import Regform from './Regform'

const About = () => {
   
    // can also use <> in place of React.Fragment</>
    return <React.Fragment>
                <Regform />
           </React.Fragment>
}
// To Make it accessible
export default About;



