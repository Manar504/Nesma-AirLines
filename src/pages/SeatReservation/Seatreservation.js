import React from "react"; 
import "./Seatreservation.css" ;
import AirplaneBody from "../../components/airplane/AirplaneBody";
import ChooseSeatsConformationCard from "../../components/ChooseSeatsConformationCard/ChooseSeatsConformationCard";

const Seatreservation = () => { 
  const handleSelectSeat = (seatNumber) => {
    console.log(`Seat ${seatNumber} selected`);
    // Your logic for seat selection here
  };

  // Prepare the rows for the airplane body
  const rows = prepareSeatRows();
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ padding: "20px", backgroundColor: "#D8DCE3" }}
      >
        <h3 className="titleCard" style={{ marginLeft: "70px" }}>
          Seat reservation
        </h3>
      </div>
      <div
        style={{ width: "100%", height: "300vh", marginTop: "50px" }}
        className="container text-start"
      >
        <p className="text" style={{width:"70%"}}>
          Please select your seat for the outbound flight. Any previously booked
          Edelweiss Options may not be displayed, but are still valid. You can
          now book additional Edelweiss Options, regardless of any existing
          extras.
        </p>  
        <div className="d-flex">
        <div>
          <img style={{width:"15px" ,backgroundColor:"green"}} src="assets\green2.png"/> 
          <span style={{fontSize:"12px", margin:"10px" }}>Selected</span>
        </div>  
        <div>
          <img style={{width:"15px" ,backgroundColor:"purple"}} src="assets\parbel12.png"/> 
          <span style={{fontSize:"12px", margin:"10px" }}>Suggestion</span>
        </div> 
        <div>
          <img style={{width:"15px" ,backgroundColor:"blue"}} src="assets\blue2.png"/> 
          <span style={{fontSize:"12px", margin:"10px" }}>Standerd</span>
        </div>  
        <div>
          <img style={{width:"15px" ,backgroundColor:"gray" }} src="assets\gray2.png"/> 
          <span style={{fontSize:"12px", margin:"10px" }}>Taken</span>
        </div>  
       
        </div>  
        
        <div >
      <AirplaneBody rows={rows} onSelectSeat={handleSelectSeat} />   
      <div className="Conformation"><ChooseSeatsConformationCard/></div>
    </div>
      </div> 
      
    </div>
  );
};  


function prepareSeatRows() {
  // Prepare your seat data here
  // This is an example, you will need to create the structure according to your seats arrangement
  const seatRows = [
    [{ number: <img src="assets\blue2.png" style={{width:"20px"}}/>, isOccupied: false },{ number: <img src="assets\green2.png" style={{width:"20px"}}/>, isOccupied: false } , { number: <img src="assets\gray2.png" style={{width:"20px"}}/>, isOccupied: false } ,
   ],
    // ... more rows
  ];
  return seatRows;
}

export default Seatreservation;
