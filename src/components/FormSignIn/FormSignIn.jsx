import React from 'react' ; 
import { Link } from 'react-router-dom'; 
import "./FormSignIn.css"

const FormSignIn = () => {
  return (
    <form className='bg-white' style={{width:"100%"  ,padding:"30px"}}>  
    <div className='d-flex justify-content-center'><img src='assets\Logo.png' style={{width:"200px"}}/></div> 
    
    <div className="row" style={{marginTop:"20px"}}>  
    <h5>Sign in</h5>
      <input type="email" className="form-control" id="date" name="date" placeholder='Enter your email'/>

      </div> 
      <div className="row" style={{marginTop:"20px"}}>  
    
      <input type="password" className="form-control" id="date" name="date" placeholder='Enter your password'/>

      </div>  
      <br/> 
      <div className='d-flex justify-content-between'>
      <p style={{color:"gray" ,fontSize:"14px"}}> <input type='checkbox'/> Save login credentials</p>  
      <p style={{color:"gray" ,fontSize:"14px"}} > Forgot password?</p> 
      </div>
 
      <Link to={"/PassngerData"} style={{width:"100%" ,backgroundColor:"#FECD42" ,border:"none"}} className='btn'>Login</Link>
    
   
    

</form>
  )
}

export default FormSignIn
