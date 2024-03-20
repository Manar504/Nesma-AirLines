import React from 'react';
import "./ChooseMeal.css"; 
import { Link } from 'react-router-dom';

const ChooseMeal = () => {
  return (
    <div>
      <div className='continar big1'>
       <h5>Adult 1</h5> 
       <div className='continar text-center'> 
       <div className='row'>
        <div className='col-6 meal-option '>
            <img className='imgs' src='assets\meal1.png'/>  
            <div className='d-flex justify-content-end'>
            <i className="fa-regular fa-circle-question" style={{fontSize: "13px",marginRight:"10px" ,marginTop:"5px" ,color:"gray"}}></i> 

            </div> 
            
           <span style={{color:"gray"}}><input type='radio'/> Classic meal</span>
        </div> 
        <div className='col-6 meal-option '>
            <img className='imgs' src='assets\meal2.png'/> 
            <div className='d-flex justify-content-end'>
            <i className="fa-regular fa-circle-question" style={{fontSize: "13px",marginRight:"10px" ,marginTop:"5px" ,color:"gray"}}></i> 

            </div> 
            
           <span style={{color:"gray"}}><input type='radio'/> Beef meal <span className='EGP'>+199 EGP</span></span>
        </div>
       </div>  
       <br/>
       <div className='row'>
        <div className='col-6 meal-option '>
            <img className='imgs' src='assets\meal3.png'/> 
            <div className='d-flex justify-content-end'>
            <i className="fa-regular fa-circle-question" style={{fontSize: "13px",marginRight:"10px" ,marginTop:"5px" ,color:"gray"}}></i> 

            </div> 
            
           <span style={{color:"gray"}}><input type='radio'/> Chicken meal  <span className='EGP'>+199 EGP</span></span>
        </div> 
        <div className='col-6 meal-option '>
            <img className='imgs' src='assets\meal4.png'/> 
            <div className='d-flex justify-content-end'>
            <i className="fa-regular fa-circle-question" style={{fontSize: "13px",marginRight:"10px" ,marginTop:"5px" ,color:"gray"}}></i> 

            </div> 
            
           <span style={{color:"gray"}}><input type='radio'/> Fish meal <span className='EGP'>+199 EGP</span></span>
        </div>
       </div> 

       <hr/> 

       <div className='text-end py-2'>
        <span style={{fontSize:"20px"}} className='EGP'>EGP  199</span>
       </div> 
       <div className='text-end'>
        <span style={{fontSize:"15px" ,}} className='EGP'> .Total price for Meal</span>
       </div> 
       <div className='d-flex justify-content-end'>
       <Link to="/" className='btn'>Add the meal</Link>
       </div>
       </div>
      </div>
    </div>
  )
}

export default ChooseMeal
