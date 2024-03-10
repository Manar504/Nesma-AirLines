
    import React from 'react';
    import './PaymentForm.css'; 
    import { Link } from 'react-router-dom';
    
    const PaymentForm = () => {
      // Event handler for CVC help click
      
    
      return (
        <div className="container justify-content-center ">
  <div className="row g-3">
    <div className="col">  
      <h2>Payment Method</h2> 
      <p style={{color:"gray", fontSize:"14px"}}>Good to know: SSL encryption is used for every transaction to keep your information safe and secure.</p>
      <div className="card">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header p-0" id="headingTwo">
              <h2 className="mb-0">
                
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                <input type="text" className="form-control" placeholder="Paypal email" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header p-0">
              <h2 className="mb-0">
                <button className="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <div className="d-flex align-items-center justify-content-between">
                    <span>Credit card</span>
                    <div className="icons">
                      <img src="https://i.imgur.com/2ISgYja.png" width={30} />
                      <img src="https://i.imgur.com/W1vtnOV.png" width={30} />
                      <img src="https://i.imgur.com/35tC99g.png" width={30} />
                      <img src="https://i.imgur.com/2ISgYja.png" width={30} />
                    </div>
                  </div>
                </button>
              </h2>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body payment-card-body text-start">
                <span style={{fontSize:"15px" ,color:"gray"}} className="font-weight-normal card-text">Card Number</span>
                <div className="input">
                
                  <input type="text" className="form-control" placeholder="0000 0000 0000 0000" />
                </div> 
                <div className="row mt-3 mb-3">
                  <div className="col-md-6">
                    <span style={{fontSize:"15px" ,color:"gray"}} className="font-weight-normal card-text">Expiry Date</span>
                    <div className="input">
                    
                      <input type="text" className="form-control" placeholder="MM/YY" />
                    </div> 
                  </div>
                  <div className="col-md-6">
                    <span style={{fontSize:"15px" ,color:"gray"}} className="font-weight-normal card-text">CVC/CVV</span>
                    <div className="input">
                      
                      <input type="text" className="form-control" placeholder={"000"} />
                    </div> 
                  </div>
                </div> 
                <p style={{fontSize:"15px" ,color:"gray" }}>To finalize your purchase, you must accept the Terms and Conditions.</p>
                <div className='d-flex'> 
                <br/>
                    
                
                <p style={{fontSize:"15px" ,color:"gray"}}> <input type='checkbox'/>  To finalize your purchase, you must accept the Terms and Conditions.</p>
                    </div> 
     
                <br/> 
                <div className='d-flex justify-content-end'>
                <Link to="/OverviewReseat" className="button">
  Complete
</Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  </div>


      );
    };
    
    export default PaymentForm;
    







