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
  // Define seat images for both available and taken seats
  const availableSeatImg = "/assets/blue2.png"; // Assuming the assets folder is in the public directory
  const takenSeatImg = "/assets/parbel12.png"; // Add a leading slash to ensure the path is absolute

  // Assume you have 37 rows and 6 seats per row
  const rows = [...Array(30)].map((_, rowIndex) => {
    return [...Array(4)].map((_, seatIndex) => {
      const isOccupied = Math.random() < 0.5;
      const seatNumber = `${rowIndex + 1}${String.fromCharCode(65 + seatIndex)}`;
      const seatImage = isOccupied ? takenSeatImg : availableSeatImg;

      return {
        number: seatNumber, // Include the seat number if needed
        isOccupied: isOccupied,
        image: seatImage, // Store just the image path
      };
    });
  });

  return rows;
}





export default Seatreservation;
