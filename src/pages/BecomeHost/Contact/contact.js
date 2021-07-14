import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  "./contact.css"
import {ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react";

export default function Contact() {
    const [ selectedFiles, setSelectedFiles ] = useState([]);
    const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};
    const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};



        return (<div>
            {/*nav*/}
            <div className="row nav" style={{height:"80px", width:"100%"}}> 
                <div style={{ marginTop:"10px"}} className="col-8">
                    <div className="row">
                        <img className="col-2" style={{width:"130px", height:"40px", marginTop:"5px", marginLeft:"90px"}} src="/assets/images/accommodation/logo2.png"></img>
                        <h style={{fontSize:"20px", marginBottom:"10px", marginTop:"8px"}} className="col-3 active">Contact, payment</h>
                    </div>
                </div>


                 {/*buton*/}
                <div style={{marginTop:"18px"}} className="col-4">
              <div className="text-center"><button className="btn  btn_normal mr5 mb3 mt3" >
                                                <i class="far fa-save"></i>  &nbsp; &nbsp; &nbsp; Save
                                </button>
                                <button style={{marginLeft:"20px"}} className="btn  btn_normal mr5 mb3 mt3" >
                                                <i class="far fa-question-circle"></i> &nbsp; &nbsp; &nbsp; Help
                                </button>
                                </div>
              </div>
               {/*end buton*/}

            </div>
             {/*end nav*/}

             <div className="row">

                  {/*video*/}
                 <div className="col-md-6">
                 <div style={{height:"580px"}} className="col video mid">
                        <video style={{width:"600px", height:"100%", objectFit:"cover", marginLeft:"100px"}}   autoPlay muted loop>
                <source className="embed-responsive" src="assets/videos/introduceNew.mp4" type="video/mp4" />
              </video>
              
              <div style={{marginLeft:"155px"}} class="color-overlay"></div>
              <div className="carousel-caption">
             <h2 className="display-2">Contact</h2>
             <h3 > Please describe how you would like to contact and pay Method of contact? &nbsp;  Method of payment?</h3>
             
           
            </div>

                    </div>

                 </div>
                  {/*end video*/}



                   {/*contact*/}
                 <div className="col-md-6">
                    <div style={{marginLeft:"20px"}} className="container">
                        
                            {/*contact*/}
                            <div style={{height:"480px"}} className="">
                                <h4 style={{ color:"#008f94", fontSize:"19px", fontWeight:"bold", marginTop:"20px"}}>Method of contact?</h4>
                                <div style={{marginTop:"10px"}} className=" body-checkbox col">
                                <ul style={{height:"120px", width:"550px"}}  className="ks-cboxtags ul">
                                    <li><input type="checkbox" id="checkbox1" defaultValue="Rainbow Dash" />  <label htmlFor="checkbox1">Email</label></li>
                                    <li><input type="checkbox" id="checkbox6" defaultValue="Cotton Candy" defaultChecked /><label htmlFor="checkbox6">Phone number</label></li>
                                    <li><input type="checkbox" id="checkbox3" defaultValue="Rarity" defaultChecked /><label htmlFor="checkbox3">Facebook</label></li>
                                    <li><input type="checkbox" id="checkbox4" defaultValue="Moondancer" /><label htmlFor="checkbox4">Direct</label></li>
                                </ul>
                            
                            </div>
                            {/*end contact*/}

                            {/*payment*/}
                            <div style={{height:"480px"}} className="">
                                <h4 style={{ color:"#008f94", fontSize:"19px", fontWeight:"bold", marginTop:"145px"}}>Method of payment?</h4>
                                <div style={{marginTop:"8px"}} className=" body-checkbox col">
                                    <ul style={{height:"120px", width:"550px"}}  className="ks-cboxtags ul">
                                        <li><input type="checkbox" id="checkboxone" defaultValue="Rainbow Dash" />  <label htmlFor="checkboxone">International payment cards</label></li>
                                        <li><input type="checkbox" id="checkboxtwo" defaultValue="Cotton Candy" defaultChecked /><label htmlFor="checkboxtwo">MoMo E-Wallet</label></li>
                                        <li><input type="checkbox" id="checkbox30" defaultValue="Rarity" defaultChecked /><label htmlFor="checkbox30">Aripay E-wallet</label></li>
                                        <li><input type="checkbox" id="checkbox40" defaultValue="Moondancer" /><label htmlFor="checkbox40">Domestic atm card</label></li>
                                    </ul>
                                
                                </div>
                            </div>
                             {/*end payment*/}

                             {/*end 1*/}
                             <div className="row">
                                <div className="col-6">
                                        <h4 style={{ color:"#008f94", fontSize:"19px", fontWeight:"bold", marginTop:"-309px"}}>Account number?</h4>
                                        <div style={{marginTop:"10px"}} className="col-md-6 form-group">
                                            <input style={{background:"#ddd", width:"250px",height:"50px", marginLeft:"-15px"}} type="text" name="name" className="form-control" id="name" placeholder="Account number" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate" />
                                        </div>
                                </div>


                                <div style={{marginLeft:"-18px"}} className="col-6">
                                <h4 style={{ color:"#008f94", fontSize:"19px", fontWeight:"bold", marginTop:"-309px"}}>Beneficiary name?</h4>
                                        <div style={{marginTop:"10px"}} className="col-md-6 form-group">
                                            <input style={{background:"#ddd", width:"250px",height:"50px", marginLeft:"-27px"}} type="text" name="name" className="form-control" id="name" placeholder="Beneficiary name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate" />
                                        </div>
                                </div>
                             </div>
                            {/*end end1*/}
                    </div>
                </div>
                    {/*end containe*/}

                    <div style={{marginTop:"-15px", marginLeft:"-30px"}} className="row line">
                        <div style={{width:"697px"}} className="row line2"> </div>
                    </div>

                     {/*button*/}
                     <div style={{height:"100px", marginTop:"15px"}} className="row">
                        <div className="col-8">
                        <a style={{fontSize:"18px", marginLeft:"0px",  marginTop:"30px"}}  href="https://vimeo.com/channels/staffpicks/93951774" data-fancybox className="text-uppercase letter-spacing-1"><i class="fas fa-arrow-left"></i> <u>Back </u></a>
                        </div>
                        <div className="col-4">
                        <Link  to="/home" style={{marginLeft:"18px"}} class='btn btn-primary'>Finish  &nbsp; &nbsp; <i class="fas fa-arrow-right"></i></Link>
                        </div>
                        </div>
                   
                    
               
                



                 </div>
                  {/*end contact*/}

             </div>


        </div>)
    
}

