import React from 'react' ;  
import "./ChooseSeatsConformationCard.css"

const ChooseSeatsConformationCard = () => {
  return (
    <div>
    <div className="continar big9">  
    <div className="flight-route">
        <span className="city">CAI</span>
        <img src='assets\arrow.png' className='arrow' style={{margin:"10px"}}/> 
        <span className="city">RUH</span>
      </div>
    <div className='row d-flex align-content-center' style={{height:"6vh" }}> 
     
     <span className="city"><img src='assets\green.png'  style={{width:"40px" ,height:"20px" ,backgroundColor:"green"}}/>  27A <span style={{color:"#4A5970", fontSize:"10px"}}>Window</span> </span>

    </div>  
     <hr/>
    <div className='row'  style={{height:"5vh"}}> 
    <ul className='city' style={{margin:"12px"}}>
        <li>
        Right side seat 
        </li> 
        <li>Window seat</li>
    </ul>

    </div>  
    <br/> <hr/>
    <div className='row'  style={{height:"8vh"}}>  

    <div className="d-flex justify-content-between align-content-center">
            <div className="city">
              <p
                className="text-start mb-0"
                style={{ fontSize: "14px", fontWeight: "600" }}
              >
                Seat price
              </p>
            </div>
            <div className="d-flex align-items-start">
              <span
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="text-muted m-0"
              >
                EGP 1245
              </span>
              
            </div>
          </div> 
          
    
    </div>
    <hr/>  
    <div className='d-flex justify-content-center'>
    <button className='button2'>Choose this seat</button> 
    </div>
      </div>
    </div>
  )
}

export default ChooseSeatsConformationCard ;
