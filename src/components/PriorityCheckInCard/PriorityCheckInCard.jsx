import React from 'react'; 
import "./PriorityCheckInCard.css"
import { Link } from 'react-router-dom';

const PriorityCheckInCard = () => {
  return (
    <div>
    <div className="continar big7">
      <h5>Adult 1</h5>
      <div className="continar text-center">
        <div className="row">
          <div className="col-6 ">
            <img className="imgs" src="assets\Priority Check-in.png" />

            
          </div>
        </div>

       
        <div  className="d-flex justify-content-between lh-condensed my-5">
         
         <div>
         <h5  className="text-start">
         Priority Check-in
            </h5>
           
         </div> 
         <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input  type="radio" />  400 EGP</span>
        
       </div> 
        
        </div>

        <hr />

        <div className="text-end py-2">
          <span style={{ fontSize: "20px" }} className="EGP">
            {" "}
            400 EGP
          </span>
        </div>
        <div className="text-end">
          <span style={{ fontSize: "15px" }} className="EGP">
            {" "}
            .Total price for baggage
          </span>
        </div>
        <div className="d-flex justify-content-end">
          
          <Link  className='btn' to="/"> Reserve </Link>
        </div>
      </div>
    </div>
  )
}

export default PriorityCheckInCard
