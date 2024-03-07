import React from 'react' 
import { Link } from 'react-router-dom'; 
import "./Formflightinfo.css"

const Formflightinfo = () => {
  return (
    <form className='bg-white PassengerInfo' style={{width:"50%" ,margin:"50px" ,padding:"30px"}}>
    <h3>Nesma Options</h3> 

    <div className='row mb-4'>
        <p className='para'>If you have already booked your flight on a Nesma route, you can add certain options to your booking. These options include seat reservation, sports equipment, excess or additional baggage, and special meals. You can add these options up to four days before your departure. To add any of these options.
Please enter your booked route.</p>
    </div>
 
  <div className="row mb-4">  
  
    <div className="col">
      <div data-mdb-input-init className="form-outline"> 
        <input type="text" id="form6Example1" className="form-control"  placeholder='First name'/>
        
      </div>
    </div>
    <div className="col">
      <div data-mdb-input-init className="form-outline"> 
        <input type="text" id="form6Example2" className="form-control"  placeholder='Last name'/>
        
      </div>
    </div>
  </div>
  {/* Text input */}


  {/* Email input */}
  <div data-mdb-input-init className="form-outline mb-4"> 
    <input type="email" id="form6Example5" className="form-control" placeholder='Email' />
    
  </div>
  {/* Number input */}
  <div data-mdb-input-init className="form-outline mb-4">
    <input type="number" id="form6Example6" className="form-control" placeholder='Mobile' />
   
  </div>
 
 
  <div className="form-check d-flex justify-content-end mb-4">
  <div className='text-end'>
<img src='assets\plus.png' style={{width:"15px"}}></img>
      <Link to="Seatreservation" className="getActionCard">Add Passenger</Link> 
      </div>
  </div> 
  <div>
    <p className='para'>Choose ‘Review and Pay’ now to book faster. Select seats and add-ons later on our app</p>
  </div>
  <div dir='rtl'>
  <Link to="/AirPlanData" className="btn mb-4 rounded-5 Save" style={{backgroundColor:"#FECD42"}}>
    Save and continue
  </Link>
</div>

</form>

  )
}

export default Formflightinfo