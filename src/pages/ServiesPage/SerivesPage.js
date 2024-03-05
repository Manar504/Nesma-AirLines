import React from "react";
import "./ServiesPage.css";
import Cards from "../../components/Cards/Cards";

const SerivesPage = () => {
  return (
    <>
      <div className="text-center mt-4 container" style={{width:"70%"}}>
        <h3 className="Services">Services</h3> 
        
        <p className="ServicesPara" >
          With our flexible booking options and transparent pricing, you can
          book with confidence knowing you're getting the best value for your
          money.
        </p> 
      </div>  
      <div className="container mt-5" style={{width:"80%"}}>
      <div className="row"> 
      <div className="col">
      <Cards/>
      </div> 
      <div className="col">
      <Cards/>
      </div>
      <div className="col">
      <Cards/>
      </div> 
      
        
      </div> 
      <div className="row"> 
      <div className="col">
      <Cards/>
      </div> 
      <div className="col">
      <Cards/>
      </div>
      <div className="col">
      <Cards/>
      </div> 
      
        
      </div>
      <div className="row"> 
      <div className="col">
      <Cards/>
      </div> 
      <div className="col">
      <Cards/>
      </div>
      <div className="col">
      <Cards/>
      </div> 
      
        
      </div>
      </div>

    </>
  );
};

export default SerivesPage;
