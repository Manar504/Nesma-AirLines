import React from 'react'
import PetsCard from '../../components/PetsCard/PetsCard'; 
import { useEffect } from 'react';

const Pets = () => { 

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
           Pets
          </h3>
        </div>
        <div
          style={{ width: "70%", height: "200vh", marginTop: "50px" }}
          className="container text-start"
        >
          
          
          <PetsCard/>
        </div> 
       
      </div>
      
    </div>
  )
}

export default Pets