import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  "./location.css"
import  "./location.scss"

export function Location() {
    
        return (<div>
            <div className="">
             <div className="row" style={{height:"80px", width:"100%"}}> 

             <div style={{marginTop:"15px"}} className="col-8">
                 <div className="row">
                   <img className="col-2" style={{width:"130px", height:"40px", marginTop:"5px", marginLeft:"90px"}} src="/assets/images/accommodation/logo2.png"></img>
                   <p style={{fontSize:"19px", marginBottom:"10px", marginTop:"8px"}} className="col-2 active">Kind, Location</p>
                </div>
              </div>

              <div style={{marginTop:"18px"}} className="col-4">
              <div className="text-center"><button className="btn  btn_normal mr5 mb3 mt3" >
                                                <i class="far fa-save"></i>  &nbsp; &nbsp; &nbsp; Save
                                </button>
                                <button style={{marginLeft:"20px"}} className="btn  btn_normal mr5 mb3 mt3" >
                                                <i class="far fa-question-circle"></i> &nbsp; &nbsp; &nbsp; Help
                                </button>
                                </div>
              </div>

              

                       
             </div>
             </div>

             <div className="container-fluid">
                <div className="row">
                    <div style={{height:"580px"}} className="col-md-6 place">
                        <h2 className="font-bold bold text-2xl mb-4 leading-none" style={{marginTop:"50px", marginLeft:"50px", color:"white"}}>What kind of accommodation do you want to rent?</h2>
                        <div style={{marginLeft:"30px"}} className=" body-checkbox">
       

<form style={{marginTop:"30px"}} className="form1">
  <div class="inputGroup">
    <input id="option1" name="option1" type="checkbox"/>
    <label for="option1">Apartment</label>
  </div>
  
  <div class="inputGroup">
    <input id="option2" name="option2" type="checkbox"/>
    <label for="option2">Unique space</label>
  </div>

  <div class="inputGroup">
    <input id="option3" name="option3" type="checkbox"/>
    <label for="option3">Hotel</label>
  </div>

  <div class="inputGroup">
    <input id="option4" name="option4" type="checkbox"/>
    <label for="option4">Extra apartment</label>
  </div>

  <div class="inputGroup">
    <input id="option5" name="option5" type="checkbox"/>
    <label for="option5">Home</label>
  </div>
  
</form>


      </div>
                    </div>

                    <div className="col-md-6">
                        <div style={{height:"490px"}} className="row location">
                            <h2 className="font-bold bold text-2xl mb-4 leading-none" style={{marginLeft:"169px", marginTop:"53px"}}>Where’s your place located?</h2>
                           
                            <div style={{marginTop:"-315px", marginLeft:"235px"}} className="body1">
                                <input className="c-checkbox" type="checkbox" id="checkbox" />
                                <div className="c-formContainer">
                                <form className="c-form" action>
                                    <input className="c-form__input" placeholder="Han Thuyen, Khu Pho 6, Linh Trung" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required />
                                    <label className="c-form__buttonLabel" htmlFor="checkbox">
                                    <button style={{width:"130px"}} className="c-form__button" type="button">Apply</button>
                                    </label>
                                    <label className="c-form__toggle" htmlFor="checkbox" data-title="Use Current Location" />
                                </form>
                                </div>
                            </div>

                            

                           
                                <div className="" style={{marginTop:"60px", marginLeft:"-250px"}}>
                                        <h4 style={{color:"#008f94", fontSize:"19px", fontWeight:"bold"}}>Country / Region</h4>
                                        <details style={{marginTop:"10px"}}>
                                            <summary>Viet Nam</summary>
                                            <ul className="ul li">
                                                <li className="li">China</li>
                                                <li className="li">India</li>
                                                <li  className="li">Japan</li>
                                                <li  className="li">Mexico</li>
                                                <li  className="li">Iran</li>
                                                <li  className="li">France</li>
                                                <li  className="li">Italy</li>
                                                <li  className="li">Spain</li>
                                                <li  className="li">Canada</li>
                                                <li  className="li">Peru</li>
                                            </ul>
                                            </details>
                                

                                <div className="">
                                    <h5 style={{color:"#008f94", fontSize:"19px", fontWeight:"bold"}}>City</h5>
                                        <details style={{marginTop:"10px"}}>
                                            <summary>Ho Chi Minh</summary>
                                            <ul className="ul">
                                                <li  className="li">Ha Noi</li>
                                                <li  className="li">Hai Phong</li>
                                                <li  className="li">Da Nang</li>
                                                <li  className="li">Can Tho</li>
                                                <li  className="li">Ca Mau</li>
                                                <li  className="li">Dak Lak</li>
                                                <li  className="li">An Giang</li>
                                                <li  className="li">Bac Giang</li>
                                                <li  className="li">Ha Giang</li>
                                                <li  className="li">Da Lat</li>
                                            </ul>
                                            </details>
                                </div>


                                <div className="">
                                    <h5 style={{color:"#008f94", fontSize:"19px", fontWeight:"bold"}}>Street</h5>
                                        <div style={{marginTop:"10px"}} className="col-md-6 form-group">
                                            <input style={{background:"#ddd", width:"298px",height:"53px", marginLeft:"-15px"}} type="text" name="name" className="form-control" id="name" placeholder="enter street" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate" />
                                        </div>
                                    </div>
                                
                        </div>
                        </div>
                        <div className="row line">
                        <div className="row line2">
                       
                       </div>
                        </div>

                        <div style={{height:"100px", marginTop:"25px"}} className="row">
                        <div className="col-8">
                        <a style={{fontSize:"18px", marginLeft:"30px",  marginTop:"15px !important"}}  href="https://vimeo.com/channels/staffpicks/93951774" data-fancybox className="text-uppercase letter-spacing-1"><i class="fas fa-arrow-left"></i> <u>Back </u></a>
                        </div>
                        <div className="col-4">
                        <Link style={{marginLeft:"30px"}} to="/descripe" class='btn btn-primary'>Next  &nbsp; &nbsp; <i class="fas fa-arrow-right"></i></Link>
                        </div>
                        </div>
                    </div>
                    
                </div>
             </div>
             
        </div>)
   
}

export default Location
