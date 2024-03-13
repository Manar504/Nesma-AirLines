import React from 'react' ; 
import { Link } from 'react-router-dom';
import "./SpecialEquipmentCard.css";

function SpecialEquipmentCard() {
  return (
    <div>
      <div className='continar big4'>
       <h5>Adult 1</h5> 
       <div className='continar text-center'> 
       <div className='row'> 
        <div className='col-6 meal-option '> 
        <h5 style={{marginTop:"20px" ,marginBottom:"20px"}} className='text-start'>Special equipment</h5>
            <img className='imgs' src='assets\Special equipment.png'/>  
           
           
         
      
           
        </div>  

        
       
       </div>   

       <div  className="d-flex justify-content-between lh-condensed">
           
           <div>
             <p className="text" style={{fontSize:"12px" ,fontWeight:"600"}}>Bike</p>
             
           </div> 
           <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input type="checkbox" />  600 EGP</span>
          
         </div> 
         <div  className="d-flex justify-content-between lh-condensed">
           
           <div>
             <p className="text" style={{fontSize:"12px" ,fontWeight:"600"}}>Boards long</p>
             
           </div> 
           <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input type="checkbox" />  600 EGP</span>
          
         </div> 
         <div  className="d-flex justify-content-between lh-condensed">
           
           <div>
             <p className="text" style={{fontSize:"12px" ,fontWeight:"600"}}>Boards small</p>
             
           </div> 
           <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input type="checkbox" />  600 EGP</span>
          
         </div> 
         <div  className="d-flex justify-content-between lh-condensed">
           
           <div>
             <p className="text" style={{fontSize:"12px" ,fontWeight:"600"}}>Fishing equipment</p>
             
           </div> 
           <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input type="checkbox" />  600 EGP</span>
          
         </div> 
         <div  className="d-flex justify-content-between lh-condensed">
           
           <div>
             <p className="text" style={{fontSize:"12px" ,fontWeight:"600"}}>Golf equipment</p>
             
           </div> 
           <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input type="checkbox" />  600 EGP</span>
          
         </div> 
         <div  className="d-flex justify-content-between lh-condensed">
           
           <div>
             <p className="text" style={{fontSize:"12px" ,fontWeight:"600"}}>Hag- gliding equipment </p>
             
           </div> 
           <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input type="checkbox" />  600 EGP</span>
          
         </div> 
         <div  className="d-flex justify-content-between lh-condensed">
           
           <div>
             <p className="text" style={{fontSize:"12px" ,fontWeight:"600"}}>Ice hockey equipment</p>
             
           </div> 
           <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input type="checkbox" />  600 EGP</span>
          
         </div> 
         <div  className="d-flex justify-content-between lh-condensed">
           
           <div>
             <p className="text" style={{fontSize:"12px" ,fontWeight:"600"}}>Scuba equipment</p>
             
           </div> 
           <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input type="checkbox" />  600 EGP</span>
          
         </div> 
         <div  className="d-flex justify-content-between lh-condensed">
           
           <div>
             <p className="text" style={{fontSize:"12px" ,fontWeight:"600"}}>Tandem equipment</p>
             
           </div> 
           <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input type="checkbox" />  600 EGP</span>
          
         </div> 
         <div  className="d-flex justify-content-between lh-condensed">
           
           <div>
             <p className="text" style={{fontSize:"12px" ,fontWeight:"600"}}>Winter sports equipment</p>
             
           </div> 
           <span style={{fontSize:"13px",fontWeight:"600"}} className="text-muted"> <input type="checkbox" />  600 EGP</span>
          
         </div> 

         

       <hr/> 

       <div className='text-end py-2'>
        <span style={{fontSize:"20px"}} className='EGP'> 1800 EGP</span>
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

export default SpecialEquipmentCard