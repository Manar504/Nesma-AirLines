import React from 'react' ; 
import { Link } from 'react-router-dom'; 
import "./AdditionalBaggageCard.css"


const AdditionalBaggageCard = () => {
  return (
    <div>
      <div className='continar big'>
       <h5>Adult 1</h5> 
       <div className='continar text-center'> 
       <div className='row'>
        <div className='col-6 meal-option '>
            <img className='imgs' src='assets\Additional Baggage.png'/>  
           
           <h5 style={{marginTop:"40px"}} className='text-start'>Oversized baggage</h5>
         
      
           
        </div>  

        
       
       </div>   

       <div  className="d-flex justify-content-between lh-condensed">
           
           <div>
             <p className="text" style={{fontSize:"12px" ,fontWeight:"600"}}>Bigger than baggage allowance (over 158 cm* and max.23 kg)</p>
             
           </div> 
           <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input type="radio" /> 1250 EGP</span>
          
         </div> 

         <div  className="d-flex justify-content-between lh-condensed">
           
           <div>
             <p className="text" style={{fontSize:"12px" ,fontWeight:"600"}}>No baggage</p>
             
           </div> 
           <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input type="radio" /> 0 EGP</span>
          
         </div>  
         <div  className="d-flex justify-content-between lh-condensed">
           
           <div>
             <h6 >Oversized baggage</h6>
             
           </div> 
           
        <div className='text-end'>
          <img src='assets/plus.png' style={{width: "15px"}} alt="Plus Icon" />
          <Link to="AdditionalBaggage" className="getActionCard">Add additional baggage</Link> 
        </div>
          
         </div> 
         
       
        

       <hr/> 

       <div className='text-end py-2'>
        <span style={{fontSize:"20px"}} className='EGP'> 1250 EGP</span>
       </div> 
       <div className='text-end'>
        <span style={{fontSize:"15px" ,}} className='EGP'> .Total price for baggage</span>
       </div> 
       <div className='d-flex justify-content-end'>
       <button className='btn'>Add baggage </button>
       </div>
       </div>
      </div>
    </div>
  )
}

export default AdditionalBaggageCard
