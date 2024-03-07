import React from 'react' 
import "./Cards.css"
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
     
    <div className="card container" style={{padding:"0px" ,marginBottom :"20px"}} >
    
    <img className="card-img-top" src="assets\Sests.png" alt="Card image cap" />
    <i className="fa-regular fa-circle-question text-end"style={{fontSize:"15px" ,margin:"5px"}}></i>  
    
    <div className="card-body">
      
      <h4 className="card-title text-center"><a className='titleCard' >Seat reservation</a></h4>
      
      <p className="card-text">Choose a seat with more legroom and be one of the first passengers
to disembark.</p> 
<div className='text-end'>
<img src='assets\plus.png' style={{width:"15px"}}></img>
      <Link to="Seatreservation" className="getActionCard">Choose your seat</Link> 
      </div>
    </div>
  </div>
  )
}

export default Cards