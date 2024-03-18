import React from 'react' 
import FlightInfo from '../FlightInfo/FlightInfo'
import FlightTimeSlider from '../FlightTimeSlider/FlightTimeSlider';
import "./Reseat.css"

const Reseat = () => {
  return (
    <div className='big-reseat'>
      <div className="container rounded-3 text-center d-flex" style={{width:"60%" , backgroundColor:"white" ,padding:"20px" }}> 
  <div className="row"> 
  
    <h2> <img style={{width:"60px"}} src='assets\succ.png'/>  Successful</h2> 
    <p style={{fontSize:"14px" ,color:"#4A5970"}}>Successful reservation check your mail </p>
     
    <div className="col order-md-2 mb-4 ">  
    <div className='nn'>
    <FlightInfo 
  from="CAI" 
  to="RUH" 
  date="Wed, 31 Jan" 
  passengers="1" 
  flightNumber="NE1234" 
/>
<FlightTimeSlider
        departureTime="20:05"
        arrivalTime="06:45"
        duration="1 Stop, 6h 25m"
      /> 
     </div>
      <div>
      <h6 className='text-start'>Overview</h6> 
      <p className='text-start para'>This overview lists all of the selected options for your booked flight.</p>
      </div>
    
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
        <br/>
      
        <li className="d-flex justify-content-between">
          <h6>Total for all passenger </h6>
          <strong>$2000</strong>
        </li> 
        <br/>  
        <br/>

        <div>
      <h6 className='text-start'>Passenger info</h6> 
      <p className='text-start para'>This overview lists all of the selected options for your booked flight.</p>
      </div>  
      <li className="my-1 d-flex justify-content-between lh-condensed">
          <div>
            <p className="my-1 info">First Name </p>
            
          </div>
          <span style={{fontSize:"13px"}} className="text-muted my-1">Manar</span>
        </li>  

        <li className="my-1 d-flex justify-content-between lh-condensed">
          <div>
            <p className="my-1 info">Last Name </p>
            
          </div>
          <span style={{fontSize:"13px"}} className="text-muted my-1">Mamdouh</span>
        </li>  
        <li className="my-1 d-flex justify-content-between lh-condensed">
          <div>
            <p className="my-1 info">Email </p>
            
          </div>
          <span style={{fontSize:"13px"}} className="text-muted my-1">Manar@gmail.com</span>
        </li>  
        <li className="my-1 d-flex justify-content-between lh-condensed">
          <div>
            <p className="my-1 info">Country </p>
            
          </div>
          <span style={{fontSize:"13px"}} className="text-muted my-1">Egypt</span>
        </li>  
        <li className="my-1 d-flex justify-content-between lh-condensed">
          <div>
            <p className="my-1 info">Mobile Number </p>
            
          </div>
          <span style={{fontSize:"13px"}} className="text-muted my-1">+20 102331487002</span>
        </li> 
      </ul> 
      
    </div>
   
    
    
  
    </div>
    </div>
    </div>
  )
}

export default Reseat
