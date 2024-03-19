// Seat.js
import React from 'react';
import './Seat.css'; // Make sure your CSS file is properly linked

const Seat = ({ seatData, onSelectSeat }) => {
  const seatImageSrc = seatData.isOccupied ? 'path_to_taken_seat_image' : 'path_to_available_seat_image';

  return (
    <div className={`seat ${seatData.isOccupied ? 'occupied' : 'available'}`} onClick={() => onSelectSeat(seatData.number)}>
      <img src={seatImageSrc} style={{ width: "20px" }} alt={seatData.number} />
    </div>
  );
};

export default Seat;


