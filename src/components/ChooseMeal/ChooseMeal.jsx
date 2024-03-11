import React from 'react';
import "./ChooseMeal.css"

const ChooseMeal = () => {
  return (
    <div>
      <div className='continar big'>
       <h5>Adult 1</h5> 
       <div className='continar text-center'> 
       <div className='row'>
        <div className='col-6'>
            <img className='imgs' src='assets\meal1.png'/>
        </div> 
        <div className='col-6'>
            <img className='imgs' src='assets\meal2.png'/>
        </div>
       </div>  
       <br/>
       <div className='row'>
        <div className='col-6'>
            <img className='imgs' src='assets\meal3.png'/>
        </div> 
        <div className='col-6'>
            <img className='imgs' src='assets\meal4.png'/>
        </div>
       </div>

       </div>
      </div>
    </div>
  )
}

export default ChooseMeal
