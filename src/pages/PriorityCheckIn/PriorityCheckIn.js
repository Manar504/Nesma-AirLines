import React from 'react'
import PriorityCheckInCard from '../../components/PriorityCheckInCard/PriorityCheckInCard'; 
import { useEffect } from 'react';


const PriorityCheckIn = () => { 
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
            Priority Check-in
            </h3>
          </div>
          <div
            style={{ width: "70%", height: "200vh", marginTop: "50px" }}
            className="container text-start"
          >
            <p className="text" style={{ width: "80%" }}>
            Don't let airport check-in waste your time, book priority check-in and avoid queues.
            </p>

            
            <PriorityCheckInCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriorityCheckIn