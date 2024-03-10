import React from 'react';
import './FlightInfo.css'; // Make sure to create a corresponding CSS file

function FlightInfo({ from, to, date, passengers, flightNumber }) {
  return (
    <div className="flight-info rounded-5">
      
      <div className="flight-details"> 
      <div className="flight-route">
        <span className="airport-code">{from}</span>
        <span style={{margin:"10px"}}> → </span>
        <span className="airport-code">{to}</span>
      </div> 
      <div class="vertical-line"></div>

        <span  className="flight-date"> <img style={{margin:"10px"}} src='assets\calendar.png'/>{date}</span> 
        <div class="vertical-line"></div>
        <span className="flight-passengers"> <img style={{margin:"10px"}} src='assets\users.png'/>{passengers} passenger(s)</span> 
        <div class="vertical-line"></div>
        <span className="flight-number"> <img style={{margin:"10px"}} src='assets\plane.png'/>{flightNumber}</span>
      </div>
    </div>
  );
}

export default FlightInfo;
