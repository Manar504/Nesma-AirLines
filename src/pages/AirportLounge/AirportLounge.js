import React from "react";
import AirportLoungeCard from "../../components/AirportLoungeCard/AirportLoungeCard"; 
import { useEffect } from "react";

const AirportLounge = () => { 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <div className="container-fluid">
          <div
            className="row"
            style={{ padding: "20px", backgroundColor: "#D8DCE3" }}
          >
            <h3 className="titleCard" style={{ marginLeft: "70px" }}>
              Airport lounge
            </h3>
          </div>
          <div
            style={{ width: "70%", height: "200vh", marginTop: "50px" }}
            className="container text-start"
          >
            <p className="text" style={{ width: "80%" }}>
              To make your trip a moment of pleasure and relaxation, we offer
              you the comfort of our VIP lounges at the best rate. Service
              available exclusively at the following airports:
            </p>
            

            
           <AirportLoungeCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportLounge;
