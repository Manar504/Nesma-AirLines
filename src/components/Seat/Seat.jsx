// Seat.js
import React from 'react';
import './Seat.css'; // Make sure to create a Seat.css file with the styles

const Seat = ({ seatNumber, isOccupied, onSelectSeat }) => {
  const seatClass = `seat ${isOccupied ? 'occupied' : 'available'}`;
  return (
    <div className={seatClass} onClick={() => onSelectSeat(seatNumber)}>
      {seatNumber}
    </div>
  );
};

export default Seat;

