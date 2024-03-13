import React from 'react'
import PriorityBoardingCard from '../../components/PriorityBoardingCard/PriorityBoardingCard'

const PriorityBoarding = () => {
  return (
    <div>
    <div>
      <div className="container-fluid">
        <div
          className="row"
          style={{ padding: "20px", backgroundColor: "#D8DCE3" }}
        >
          <h3 className="titleCard" style={{ marginLeft: "70px" }}>
          Priority boarding
          </h3>
        </div>
        <div
          style={{ width: "70%", height: "200vh", marginTop: "50px" }}
          className="container text-start"
        >
          <p className="text" style={{ width: "80%" }}>
          Book your priority boarding and be among the first to board the plane. All you have to do is sit back and relax before take-off.
          </p>

          
          <PriorityBoardingCard/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PriorityBoarding
