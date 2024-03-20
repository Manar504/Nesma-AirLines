import React from 'react'; 
import "./AirportLoungeCard.css"
import { Link } from 'react-router-dom';

const AirportLoungeCard = () => {
  return (
    <div>
      <div className="continar big5">
        <h5>Adult 1</h5>
        <div className="continar text-center">
          <div className="row">
            <div className="col-6 ">
              <img className="imgs" src="assets\Airport lounge.png" />

              
            </div>
          </div>

         
          <div  className="d-flex justify-content-between lh-condensed my-5">
           
           <div>
           <h5  className="text-start">
              VIP Airport lounge
              </h5>
             
           </div> 
           <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input type="radio" />  200 EGP</span>
          
         </div> 
          
          </div>

          <hr />

          <div className="text-end py-2">
            <span style={{ fontSize: "20px" }} className="EGP">
              {" "}
              200 EGP
            </span>
          </div>
          <div className="text-end">
            <span style={{ fontSize: "15px" }} className="EGP">
              {" "}
              .Total price for baggage
            </span>
          </div>
          <div className="d-flex justify-content-end"> 
            <Link to="/" className='btn'>Reserve</Link>
          </div>
        </div>
      </div>
  )
}

export default AirportLoungeCard