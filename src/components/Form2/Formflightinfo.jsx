import React, { useState } from "react";
import "./Formflightinfo.css"; // This is where you will import your styles from
import { Link } from "react-router-dom";

function FlightForm() {
  // ... (your useState and functions here)

  return (
    <form className="flight-form">
      <div className="row">
        <h2>Nesma Options</h2>
        <p className="para2">
          If you have already booked your flight on a Nesma route, you can add
          certain options to your booking. These options include seat
          reservation, sports equipment, excess or additional baggage, and
          special meals. You can add these options up to four days before your
          departure. To add any of these options. <br/> Please enter your booked
          route.
        </p>
      </div>

      <div className="form-row">
        <div className="form-group col">
         
          <input 
          
            className="form-control"
            type="text"
            id="from"
            name="from"
            placeholder="  From "
            //   value={formData.from}
            //   onChange={handleChange} 

          />  
          <button><i class="fa-solid fa-plane-up" aria-hidden="true"></i></button>
        </div>
        <div className="form-group2 col">
          
          <input
            className="form-control"
            type="text"
            id="to"
            name="to"
            placeholder="   To"
            //   value={formData.to}
            //   onChange={handleChange}
          />  
           <button><i className="fa-solid fa-plane-arrival"></i></button>
        </div> 
       
      </div>  
      <br/>
      <div className="row">  
      <h4>Flight dates</h4>
      <p className="para">Please enter the date on which you plan to travel for your flights.</p> 
      </div> 
      <div className="row"> 
      <input type="date" className="form-control" id="date" name="date"/>
      </div>  
      <div className="d-flex my-2"> 
         <div style={{color:"gray" ,marginRight:"30px"}}> <input type="checkbox"/> Today</div> 
         <div style={{color:"gray" ,marginRight:"30px"}}> <input type="checkbox"/> Flight Day</div>
         <div style={{color:"gray" ,marginRight:"30px"}}> <input type="checkbox"/> Selection</div>
      </div>

      <br/>
      <div className="row">  
      <h4>Flight number</h4>
      <p className="para">Please enter the number of your flight booking.</p> 
      </div> 
      <div className="row"> 
      <input type="text" className="form-control" id="date" name="flightNumber" placeholder="Ex:9BVD32"/>

      </div> 
      <div className="d-flex justify-content-end mt-3">
      <Link to="/OverviewCheckout" className="btn1 Link">
  Checkout
</Link>
      </div>
    </form>
  );
}

export default FlightForm;
