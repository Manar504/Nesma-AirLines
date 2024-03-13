import React from 'react'
import { Link } from 'react-router-dom';
import "./FormPassengerinfo.css"; 



const FormPassengerinfo = () => { 


  return ( 
   <form className='bg-white PassengerInfo' style={{width:"50%" ,margin:"50px" ,padding:"30px"}}>
    <h3> Passenger info</h3>
 <div className='row mb-4'> 
 <label style={{color:"gray" ,marginBottom:"10px"}}>Gender</label>
 <div data-mdb-input-init className="form-outline">  
        <select id="form6Example1" className="form-control" name='gender'>  
        <option value="saab">Male</option>
  <option value="mercedes">Female</option>
        </select>
        
      </div>
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

  <div data-mdb-input-init className="form-outline mb-4"> 
    <input type="email" id="form6Example5" className="form-control" placeholder='Email' />
    
  </div> 
  <div data-mdb-input-init className="form-outline mb-4"> 
  <label style={{color:"gray" ,marginBottom:"10px"}}>Country</label>
  <select id="form6Example1" className="form-control" name='gender'>  
        <option value="saab">Egypt</option>
  <option value="mercedes">Franc</option>
        </select>
   
  </div>
  <label style={{color:"gray" ,marginBottom:"10px"}}>Mobile</label>
  <div data-mdb-input-init className="form-outline mb-4">
    <input type="number" id="form6Example6" className="form-control" placeholder='+20' />
   
  </div>
 
 
  <div className="form-check d-flex justify-content-end mb-4">
  <div className='text-end'>
<img src='assets\plus.png' style={{width:"15px"}}></img>
      <Link to="" className="getActionCard">Add Passenger</Link> 
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

export default FormPassengerinfo