// Seat.js
import React from 'react';
import './Seat.css'; // Assuming you have a CSS file for styles

const Seat = ({ seatNumber, isOccupied, onSelectSeat }) => {
  const seatClass = isOccupied ? 'seat occupied' : 'seat';
  return (
    <div className={seatClass} onClick={() => onSelectSeat(seatNumber)}>
      {seatNumber}
    </div>
  );
};

export default Seat;
