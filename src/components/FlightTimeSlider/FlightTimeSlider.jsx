import React from 'react';
import './FlightTimeSlider.css';

const FlightTimeSlider = ({ departureTime, arrivalTime, duration }) => {
  // You can use useState hook here if you need to manage state

  return (
    <div className="flight-time-slider">
      <div className="times">
        <span className="time departure-time">{departureTime}</span>
        <div className="slider-container">
          <input type="range" min="0" max="100" className="slider" />
        </div>
        <span className="stop duration">{duration}</span>
        <span className="time arrival-time">{arrivalTime}</span>
      </div>
    </div>
  );
};

export default FlightTimeSlider;
