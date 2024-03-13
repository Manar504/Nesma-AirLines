import React from "react";

import UnaccompaniendMinorCard from "../../components/UnaccompaniendMinorCard/UnaccompaniendMinorCard";

const UnaccompaniedMinor = () => {
  return (
    <div>
      <div>
        <div className="container-fluid">
          <div
            className="row"
            style={{ padding: "20px", backgroundColor: "#D8DCE3" }}
          >
            <h3 className="titleCard" style={{ marginLeft: "70px" }}>
              Unaccompanied minor
            </h3>
          </div>
          <div
            style={{ width: "70%", height: "200vh", marginTop: "50px" }}
            className="container text-start"
          >
            <p className="text" style={{ width: "80%" }}>
              Our "unaccompanied minor" service is available for children
              between the ages of 5 and 12. It includes personalized
              accompaniment by our staff from the departure airport to the
              arrival at the destination. With Nesma Airline, your child will
              travel safely for an assistance fee.
            </p>

            <UnaccompaniendMinorCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnaccompaniedMinor;
