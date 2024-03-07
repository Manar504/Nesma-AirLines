import React from 'react' ; 
import "./AirPlanData.css"
import Formflightinfo from '../../components/Form2/Formflightinfo';

const AirPlanData = () => {
  return (
<div className='continar' style={{height:"200vh"}}>  
    <div>
    <div className='Cover'>    
    
    <h1 className='FLYWITHUS'>FLY WITH US</h1> 
    <p className='DISCOVEROURROUTES'>DISCOVER OUR ROUTES</p>
   
    
         
    <div className="d-flex justify-content-center align-items-start" >
    <Formflightinfo/>
   </div>
    </div> 
   
    </div>
   
    </div>
  )
}

export default AirPlanData
