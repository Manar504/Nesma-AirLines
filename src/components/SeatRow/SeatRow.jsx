// SeatRow.js
import React from 'react';
import Seat from '../Seat/Seat';
import './SeatRow.css'; // Assuming you have a CSS file for styles

const SeatRow = ({ row, onSelectSeat }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat
          key={seat.number}
          seatNumber={seat.number}
          isOccupied={seat.isOccupied}
          onSelectSeat={onSelectSeat}
        />
      ))}
    </div>
  );
};

export default SeatRow;
