import React from "react";
import ChooseMeal from "../../components/ChooseMeal/ChooseMeal"; 
import "./MealsOnBoard.css"

const MealsOnBoard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div
          className="row"
          style={{ padding: "20px", backgroundColor: "#D8DCE3" }}
        >
          <h3 className="titleCard" style={{ marginLeft: "70px" }}>
            Meals on board
          </h3>
        </div>
        <div
          style={{ width: "70%", height: "200vh", marginTop: "50px" }}
          className="container text-start"
        >
          <p className="text" style={{width:"80%"}}>
            Enjoy a culinary experience in the air by choosing your own meal
            served on board. Choose your meal on board and let us spoil you.
            Reservations must be made 36 hours before departure.
          </p>  
          
          <ChooseMeal/>
        </div> 
       
      </div>
      
    </div>
  );
};

export default MealsOnBoard;
