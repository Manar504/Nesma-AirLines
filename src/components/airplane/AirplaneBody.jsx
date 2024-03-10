// AirplaneBody.js
import React from 'react';
import SeatRow from '../SeatRow/SeatRow';
import './airplane.css'; // Assuming you have a CSS file for styles

const AirplaneBody = ({ rows, onSelectSeat }) => {
  return (
    <div className="airplane-body">
      {rows.map((row, index) => (
        <SeatRow key={index} row={row} onSelectSeat={onSelectSeat} />
      ))}
    </div>
  );
};

export default AirplaneBody;

