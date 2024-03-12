import React from "react";
import "./AdditionalBaggage.css"
import AdditionalBaggageCard from "../../components/AdditionalBaggageCard/AdditionalBaggageCard";
function AdditionalBaggage() {
  return (
    <div>
      <div>
        <div className="container-fluid">
          <div
            className="row"
            style={{ padding: "20px", backgroundColor: "#D8DCE3" }}
          >
            <h3 className="titleCard" style={{ marginLeft: "70px" }}>
              Additional Baggage{" "}
            </h3>
          </div>
          <div
            style={{ width: "70%", height: "200vh", marginTop: "50px" }}
            className="container text-start"
          >
            <p className="textd" style={{ width: "80%" }}>
              If your luggage weighs more than the allowed limit, you will be
              required to pay an excess baggage fee. You have two options to pay
              this fee:
            </p>
            <p className="text">
              1. You can pay online and take advantage of our best rates, which
              are up to 40% cheaper than the airport rates. This option is
              available up to 4 hours before the scheduled departure time of
              your flight.
            </p>  

            <p className="text">2. You can also pay for your excess baggage at the airport when you check-in.</p> 
            <p className="textd">Please note that the maximum weight allowed for any single piece of excess baggage is 32 kg.</p> 
          <AdditionalBaggageCard/>
          </div> 
          
        </div>
      </div>
    </div>
  );
}

export default AdditionalBaggage;
