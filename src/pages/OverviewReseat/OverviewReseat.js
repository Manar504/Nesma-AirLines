import React from 'react' 
import "./OverviewReseat.css"
import Reseat from '../../components/Reseat/Reseat' ; 
import { useEffect } from 'react';

const OverviewReseat = () => { 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='continar' style={{height:"300vh"}}>  
    <div>
    <div className='Cover'>    
    
    <h1 className='FLYWITHUS'>FLY WITH US</h1> 
    <p className='DISCOVEROURROUTES'>DISCOVER OUR ROUTES</p>
   
    
         
    <div className="d-flex justify-content-center align-items-start form" >
     <Reseat/>
   </div>
    </div> 
    
    </div> 
   
  
    </div>
  )
}

export default OverviewReseat