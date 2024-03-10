import React from 'react' 
import FlightInfo from '../FlightInfo/FlightInfo'
import PaymentForm from '../PaymentForm/PaymentForm'

const CheckoutForm = () => {
  return ( 
    <>
   <div className="container rounded-3 text-center d-flex" style={{width:"90%" , backgroundColor:"white" ,padding:"20px" }}> 
  <div className="row">  
    <h2>Overview</h2> 
    <p style={{fontSize:"14px" ,color:"#4A5970"}}>This overview lists all of the selected options for your booked flight.</p>
    <div className="col order-md-2 mb-4">  
    <FlightInfo 
  from="CAI" 
  to="RUH" 
  date="Wed, 31 Jan" 
  passengers="1" 
  flightNumber="NE1234" 
/>

    
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
  <div className='vertical-line '></div> 
  <PaymentForm/>
  </div> 
  </>
  )


}

export default CheckoutForm