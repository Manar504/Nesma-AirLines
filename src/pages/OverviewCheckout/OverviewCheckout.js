import React from 'react' 
import "./OverviewCheckout.css"
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import PaymentForm from '../../components/PaymentForm/PaymentForm';  
import { useEffect } from 'react';

const OverviewCheckout = () => { 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='continar' style={{height:"200vh"}}>  
    <div>
    <div className='Cover'>    
    
    <h1 className='FLYWITHUS'>FLY WITH US</h1> 
    <p className='DISCOVEROURROUTES'>DISCOVER OUR ROUTES</p>
   
    
         
    <div className="d-flex justify-content-center align-items-start form" >
     <CheckoutForm/>
   </div>
    </div> 
    
    </div> 
   
  
    </div>
  )
}

export default OverviewCheckout