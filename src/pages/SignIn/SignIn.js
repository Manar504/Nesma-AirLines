import React from "react";
import "./SignIn.css";
import FormSignIn from "../../components/FormSignIn/FormSignIn";

const SignIn = () => {
  return (
    <div className="continar" style={{ height: "100vh" }}>
      <div className="row" style={{width:"100%"}}>
        <div className="col-6" style={{marginLeft:"200px"}} >
          <div className="flight">
            <img src="assets\signIn.png" style={{ width: "400px" }} /> 
          </div> 
          <p  style={{ width: "400px" ,marginTop:"20px", color:"gray" ,fontSize:"15px" }} >
              Please note that the prices for your selected flights may vary
              depending on the combination of flights and dates you choose. The
              price you see displayed includes the total cost for all
              passengers, which covers the fare, taxes, fees, and surcharges.
              Please keep in mind that additional charges may apply for flights
              operated by other airlines. 
              <br/> <br/>
              <p> Please also be aware that the
              availability of Qsuite in Business Class is subject to change
              based on operational requirements, which may result in aircraft
              changes.</p>
            </p> 
           
        </div>  
        <div className="col-4"  style={{marginTop:"60px"}}>
          <FormSignIn/>
        </div> 
       
      </div> 

      
    </div>
  );
};

export default SignIn;
