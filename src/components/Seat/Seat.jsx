// Seat.js
import React, { useState } from 'react';
import './Seat.css'; // Your CSS file

const Seat = ({ seatData, onSelectSeat }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    onSelectSeat(seatData.number); // Call the onSelectSeat callback
    setIsSelected(!isSelected);    // Toggle the selected state
  };

  // Determine the image based on the selection state
  const seatImageSrc = isSelected ? '/assets/green2.png' : seatData.image;

  return (
    // Modify the className in the Seat component
<div className={`seat ${seatData.isOccupied ? 'occupied' : isSelected ? 'selected' : 'available'}`} onClick={handleClick}>
      <img src={seatImageSrc} alt={`Seat ${seatData.number}`} style={{ width: "20px" }} />
    </div>
  );
};

export default Seat;



