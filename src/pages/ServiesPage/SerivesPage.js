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
      <Cards
        imageSrc="assets/Sests.png"
        title="Seat reservation"
        description="Choose a seat with more legroom and be one of the first passengers to disembark."
        link="Seatreservation"
        linkText="Choose your seat"
      />
      </div> 
      <div className="col">
      <Cards
        imageSrc="assets\meals.png"
        title="Meals on board"
        description="Indulge in a culinary experience in the sky by choosing your meal"
        link="Seatreservation"
        linkText="Choose your meal"
      />
      </div>
      <div className="col">
      <Cards
        imageSrc="assets\Additional Baggage.png"
        title="Additional Baggage"
        description="Choose a seat with more legroom and be one of the first passengers to disembark."
        link="Seatreservation"
        linkText="Add baggage"
      />
      </div> 
      
        
      </div> 
      <div className="row"> 
      <div className="col">
      <Cards
        imageSrc="assets\Pets.png"
        title="Pets"
        description="Choose a seat with more legroom and be one of the first passengers to disembark."
        link="Seatreservation"
        linkText="Add Pets"
      />
      </div> 
      <div className="col">
      <Cards
        imageSrc="assets\Special equipment.png"
        title="Special equipment"
        description="Choose a seat with more legroom and be one of the first passengers to disembark."
        link="Seatreservation"
        linkText="Add Special equipment"
      />
      </div>
      <div className="col">
      <Cards
        imageSrc="assets\Airport lounge.png"
        title="Airport lounge"
        description="Choose a seat with more legroom and be one of the first passengers to disembark."
        link="Seatreservation"
        linkText="Add Airport lounge"
      />
      </div> 
      
        
      </div>
      <div className="row"> 
      <div className="col">
      <Cards
        imageSrc="assets\Unaccompanied minor.png"
        title="Unaccompanied minor"
        description="Choose a seat with more legroom and be one of the first passengers to disembark."
        link="Seatreservation"
        linkText="Add Unaccompanied minor"
      />
      </div> 
      <div className="col">
      <Cards
        imageSrc="assets\Priority Check-in.png"
        title="Priority Check-in"
        description="Choose a seat with more legroom and be one of the first passengers to disembark."
        link="Seatreservation"
        linkText="Add Priority Check-in"
      />
      </div> 
      <div className="col">
      <Cards
        imageSrc="assets\Priority boarding.png"
        title="Priority boarding"
        description="Choose a seat with more legroom and be one of the first passengers to disembark."
        link="Seatreservation"
        linkText="Add Priority boarding"
      />
      </div>
     
      
        
      </div>
      </div>

    </>
  );
};

export default SerivesPage;
