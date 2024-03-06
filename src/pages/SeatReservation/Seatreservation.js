import React from "react"; 
import "./Seatreservation.css"

const Seatreservation = () => {
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
        style={{ width: "70%", height: "100vh", marginTop: "50px" }}
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
          <img style={{width:"15px" ,backgroundColor:"green"}} src="assets\green.png"/> 
          <span style={{fontSize:"12px", margin:"10px" }}>Selected</span>
        </div>  
        <div>
          <img style={{width:"15px" ,backgroundColor:"purple"}} src="assets\purple.png"/> 
          <span style={{fontSize:"12px", margin:"10px" }}>Suggestion</span>
        </div> 
        <div>
          <img style={{width:"15px" ,backgroundColor:"blue"}} src="assets\blue.png"/> 
          <span style={{fontSize:"12px", margin:"10px" }}>Standerd</span>
        </div>  
        <div>
          <img style={{width:"15px" ,backgroundColor:"gray" }} src="assets\gray.png"/> 
          <span style={{fontSize:"12px", margin:"10px" }}>Taken</span>
        </div> 
        </div>
      </div>
    </div>
  );
};

export default Seatreservation;