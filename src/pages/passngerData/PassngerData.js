import React from 'react';
import "./PassngerData.css"
import FormPassengerinfo from '../../components/form/FormPassengerinfo'; 
import { useEffect } from 'react';

const PassngerData = () => { 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='continar' style={{height:"200vh"}}>  
    <div>
    <div className='Cover'>    
    
    <h1 className='FLYWITHUS'>FLY WITH US</h1> 
    <p className='DISCOVEROURROUTES'>DISCOVER OUR ROUTES</p>
   
    
   
    <div className="d-flex justify-content-center align-items-start" >
   <FormPassengerinfo/> 
   </div>
    </div> 
   
    </div>
   
    </div>
  )
}

export default PassngerData;