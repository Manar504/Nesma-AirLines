import React from 'react' 
import FlightInfo from '../FlightInfo/FlightInfo'

const Reseat = () => {
  return (
    <div>
      <div className="container rounded-3 text-center d-flex" style={{width:"90%" , backgroundColor:"white" ,padding:"20px" }}> 
  <div className="row"> 
  
    <h2> <img style={{width:"60px"}} src='assets\succ.png'/>  Successful</h2> 
    <p style={{fontSize:"14px" ,color:"#4A5970"}}>Successful reservation check your mail </p>
    <div className="col order-md-2 mb-4">  
  
  
    
      <ul className="list-group mb-3"> 
      
        <li className="d-flex justify-content-between lh-condensed"> 
        
          <div>
            <p  className="my-1 para">Seat reservation</p>
           
          </div>
          <span className="text-muted my-1">$12</span>
        </li>
        <li className="my-1 d-flex justify-content-between lh-condensed">
          <div>
            <p className="my-1 para">Beef mealt</p>
            
          </div>
          <span className="text-muted my-1">$8</span>
        </li>
        <li className="my-1 d-flex justify-content-between lh-condensed">
          <div>
            <p className="my-1 para">Additional Baggage</p>
            
          </div>
          <span className="text-muted my-1">$8</span>
        </li>
        <li className="my-1 d-flex justify-content-between lh-condensed">
          <div>
            <p className="my-1 para">Pets</p>
            
          </div>
          <span className="text-muted my-1">$8</span>
        </li> 
        <li className="my-1 d-flex justify-content-between lh-condensed">
          <div>
            <p className="my-1 para">Special equipment</p>
            
          </div>
          <span className="text-muted my-1">$8</span>
        </li>
        <li className="my-1 d-flex justify-content-between lh-condensed">
          <div>
            <p className="my-1 para">Wheelchair</p>
            
          </div>
          <span className="text-muted my-1">$8</span>
        </li>
        <li className="my-1 d-flex justify-content-between lh-condensed">
          <div>
            <p className="my-1 para">Airport lounge</p>
            
          </div>
          <span className="text-muted my-1">$8</span>
        </li> 
        <hr/>
        <li className=" para d-flex justify-content-between">
          <span>Total for passenger 1 </span>
          <strong>$20</strong>
        </li>
      </ul>
     
    </div>
   
    
    
  
    </div>
    </div>
    </div>
  )
}

export default Reseat
