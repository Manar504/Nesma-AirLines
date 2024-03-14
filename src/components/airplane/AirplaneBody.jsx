import SeatRow from '../SeatRow/SeatRow';
import './airplane.css'; // Make sure to create an AirplaneBody.css file with the styles

const AirplaneBody = ({ rows, onSelectSeat }) => {
  return (
    <div className="airplane-body">
      {rows.map((row, index) => (
        <SeatRow key={index} row={row} onSelectSeat={onSelectSeat} />
      ))}
 
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 434 296" fill="none" className='mt-5 red'>
  <path d="M74.9557 229.32C101.014 138.839 167.604 50.1425 200.711 9.87353C211.063 -2.71802 229.542 -3.26073 240.557 8.75505C276.861 48.357 350.423 137.504 370.787 229.32C509.717 855.739 376.315 1818.52 376.315 1818.52L335.536 2019H117.119L74.9557 1818.52C74.9557 1818.52 -93.6947 814.912 74.9557 229.32Z" fill="#D32A2A"/>
</svg>  
 
<div> 
<svg xmlns="http://www.w3.org/2000/svg" width="267" height="182" viewBox="0 0 267 182" fill="none">
  <path d="M266.432 1.74414L14.0935 150.661L1.47656 174.399L6.16284 181.23L208.935 106.259H266.432V1.74414Z" fill="#D2DAE7" stroke="#637289"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="1000" viewBox="0 0 433 2253" fill="none">
  <path d="M58.2548 146.973C67.5328 73.9451 113.335 37.3983 157.179 19.0853C201.048 0.761962 242.913 0.720086 244.118 0.722793L244.146 0.722798L244.147 0.722806L244.147 0.722808L244.148 0.722813L244.148 0.722816L244.149 0.722818L244.149 0.722818L244.15 0.72282L244.151 0.722821L244.151 0.722825L244.151 0.722851L244.155 0.722845L244.155 0.722843L244.183 0.72295C245.365 0.727449 275.972 1.02516 308.262 19.4479C340.515 37.8503 374.514 74.3727 382.489 146.962C430.437 583.428 436.459 1053.62 430.493 1414.71C427.509 1595.26 421.529 1748.52 416.295 1856.64C413.678 1910.71 411.247 1953.49 409.471 1982.75C408.583 1997.38 407.858 2008.63 407.356 2016.23C407.104 2020.02 406.909 2022.91 406.776 2024.84C406.709 2025.81 406.659 2026.53 406.624 2027.02L406.586 2027.57L406.577 2027.69L406.576 2027.71L343.156 2251.51H107.72L31.7007 2016.17L31.6911 2016.06L31.6452 2015.52C31.6047 2015.04 31.5444 2014.32 31.4655 2013.38C31.3076 2011.48 31.0751 2008.65 30.7766 2004.92C30.1795 1997.46 29.3183 1986.4 28.2618 1972.02C26.149 1943.25 23.2553 1901.17 20.1323 1847.93C13.8862 1741.44 6.72279 1590.28 3.05339 1411.62C-4.2855 1054.3 2.35252 586.984 58.2548 146.973ZM243.91 0.671893C243.776 0.5513 243.715 0.333896 243.718 0.118732C243.759 0.118413 243.797 0.118157 243.832 0.117952C243.827 0.328962 243.899 0.5538 244.118 0.718846C244.119 0.719895 244.121 0.720942 244.122 0.721987L244.118 0.721768L244.115 0.721647L244.101 0.720565C244.095 0.719985 244.078 0.718108 244.067 0.716693C244.047 0.713357 243.967 0.693517 243.91 0.671893Z" fill="#FAFAFB" stroke="#637289" stroke-width="1.21111"/>
</svg>   
{/* <svg  className='' xmlns="http://www.w3.org/2000/svg" width="500" height="528" viewBox="0 0 737 528" fill="none">
  <path d="M1 1.11719L701 437.117L736 506.617L723 526.617L160.5 307.117H1V1.11719Z" fill="#CDD6E6" stroke="#637289"/>
</svg>  */}
<svg className='small-right' xmlns="http://www.w3.org/2000/svg" width="267" height="182" viewBox="0 0 267 182" fill="none">
<path d="M0.568329 1.74414L252.907 150.661L265.523 174.399L260.837 181.23L58.0654 106.259H0.568329V1.74414Z" fill="#D2DAE7" stroke="#637289"/>
</svg> 

</div>


    </div>
  );
};

export default AirplaneBody;

