import React from "react";
import "./SignIn.css";
import FormSignIn from "../../components/FormSignIn/FormSignIn";
import { useEffect } from "react";

const SignIn = () => { 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container my-5">
      <div className="row nn">
        <div className="col xx">
          <div className="flight">
            <img src="assets/signIn.png" alt="Sign In" />
          </div>
          <p className="flight-info">
            Please note that the prices for your selected flights may vary
            depending on the combination of flights and dates you choose. The
            price you see displayed includes the total cost for all passengers,
            which covers the fare, taxes, fees, and surcharges. Please keep in
            mind that additional charges may apply for flights operated by other
            airlines. <br /> <br /> Please also be aware that the availability
            of Qsuite in Business Class is subject to change based on
            operational requirements, which may result in aircraft changes.
          </p>
        </div>
        <div className="col">
          <FormSignIn />
        </div>
      </div>
    </div>
  );
};

export default SignIn;

