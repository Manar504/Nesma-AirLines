// SeatRow.js
import React from 'react';
import Seat from '../Seat/Seat';
import './SeatRow.css'; // Your CSS styles for the row

const SeatRow = ({ row, rowIndex, onSelectSeat }) => {
  return (
    <div className="seat-row">
      {/* Add a div for the row number */}
      <div className="row-number">{rowIndex + 1}</div>
      {row.map((seatData, index) => (
        <Seat key={index} seatData={seatData} onSelectSeat={onSelectSeat} />
      ))}
    </div>
  );
};

export default SeatRow;




