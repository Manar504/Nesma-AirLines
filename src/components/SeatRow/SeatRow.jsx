import React from 'react';
import Seat from '../Seat/Seat';
import './SeatRow.css'; // Your CSS styles for the row

const SeatRow = ({ row, onSelectSeat }) => {
  return (
    <div className="seat-row">
      {row.map((seatData, index) => (
        <Seat key={index} seatData={seatData} onSelectSeat={onSelectSeat} />
      ))}
    </div>
  );
};

export default SeatRow;



