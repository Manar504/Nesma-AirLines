import React from 'react' 
import "./OverviewReseat.css"
import Reseat from '../../components/Reseat/Reseat'

const OverviewReseat = () => {
  return (
    <div className='continar' style={{height:"200vh"}}>  
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