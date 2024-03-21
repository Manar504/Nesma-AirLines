import React from "react";
import SpecialEquipmentCard from "../../components/SpecialEquipmentCard/SpecialEquipmentCard"; 
import { useEffect } from "react";

const SpecialEquipment = () => { 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div
          className="row"
          style={{ padding: "20px", backgroundColor: "#D8DCE3" }}
        >
          <h3 className="titleCard" style={{ marginLeft: "70px" }}>
            Special equipment
          </h3>
        </div>
        <div
          style={{ width: "70%", height: "200vh", marginTop: "50px" }}
          className="container text-start"
        >
          <p className="text" style={{ width: "80%" }}>
            Take your equipment (windsurfing, kayaking, hang gliding, biking,
            hunting, diving equipment) wherever you go, while enjoying a smooth
            and comfortable trip. Over 15 kg, additional kilos will be charged
            at the excess baggage rate.
          </p> 
          <SpecialEquipmentCard/>
        </div> 
    
      </div>
    </div>
  );
};

export default SpecialEquipment;
