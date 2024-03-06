import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-transparnt" style={{padding:"0px"}}>
  {/* Container wrapper */}
  <div className="container-fluid" >
    {/* Toggle button */}
    <button data-mdb-collapse-init className="navbar-toggler" type="button" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars" />
    </button>
    {/* Collapsible wrapper */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* Navbar brand */}
      <Link className="navbar-brand mt-0 mt-lg-0" style={{padding:"0px" ,marginLeft:"200px"}} to="/">
        <img src="assets\Logo.png" height={50}  alt="Logo" loading="lazy" />
      </Link>
     
    </div>
    <div className="d-flex align-items-center mx-5">
      
      <a className="text-reset me-1" href="#">
      <i className="fa-solid fa-earth-americas"></i>
      </a> 
      EN
    </div>  

   
    
    <div className="d-flex align-items-center mx-5">
    
      <Link className="text-reset me-1 " to="PassngerData">
      <i className="fa-regular fa-user"></i>  
      </Link> 
      Sign in 
      
      
    
    
    </div>
    
  </div>
 
</nav>


  )
}

export default Nav