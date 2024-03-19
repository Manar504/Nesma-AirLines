import React from 'react';
import './Seat.css'; // Make sure your CSS file is properly linked

const Seat = ({ seatData, onSelectSeat }) => {
  // Use the image path from seatData to set as the src for img tag
  return (
    <div className={`seat ${seatData.isOccupied ? 'occupied' : 'available'}`} onClick={() => onSelectSeat(seatData.number)}>
      <img src={seatData.image} alt={`Seat ${seatData.number}`} style={{ width: "15px" ,margin:"0px" ,padding:"0px" }} />
    </div>
  );
};

export default Seat;



