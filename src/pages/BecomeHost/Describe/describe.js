import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  "./describe.css"
import {useState} from "react";

export default function Describe () {

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
             <div className="">
             <div className="row nav" style={{height:"80px", width:"100%"}}> 

             <div style={{ marginTop:"20px"}} className="col-8">
             <div className="row">
                   <img className="col-2" style={{width:"130px", height:"40px", marginTop:"5px", marginLeft:"90px"}} src="/assets/images/accommodation/logo2.png"></img>
                   <p style={{fontSize:"19px", marginBottom:"10px", marginTop:"8px"}} className="col-1 active">Describe</p>
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
                   
                    <div className="col-md-6">
                        
                    <div className="app">
                        <div className="heading"> <p style={{color:"#008f94", fontSize:"19px", fontWeight:"bold", marginLeft:"60px", marginTop:"20px"}}>Liven up your listing with photos </p></div>
                        <div>
                            <input type="file" id="file" multiple onChange={handleImageChange} />
                            <div style={{ marginLeft:"60px", marginTop:"10px", marginBottom:"30px"}} className="label-holder">
                                <label htmlFor="file" className="label">
                                <i className="material-icons">Upload Photos</i> &nbsp; &nbsp;
                                    <i  style={{fontSize:"20px"}} class="fas fa-camera"></i>
                                </label>
                            </div>
                            <div style={{height:"395px", background:"#ADD8E6",marginLeft:"60px", width:"591px"}} className="result">{renderPhotos(selectedFiles)}
                            
                            </div>
                        </div>
                    </div>


                    </div>


                    <div className="col-md-6">

                        <div  className="">
                        <div style={{height:"480px"}}>
                            <div style={{width:"550px", height:"450px"}} className="describe">
                                <h4 style={{color:"#008f94", fontSize:"19px", fontWeight:"bold" , marginLeft:"30px", marginTop:"20px"}}>What amenities do you offer?</h4>
                                <h5 style={{ marginLeft:"30px", fontSize:"16px", marginTop:"10px"}} >These are just the amenities guests usually expect, but you can add even more after you publish.</h5>
                                <div style={{marginLeft:"30px"}} className=" body-checkbox col">
        <ul style={{ marginTop:"10px",height:"175px"}}  className="ks-cboxtags ul">
          <li><input type="checkbox" id="checkboxOne" defaultValue="Rainbow Dash" />  <label htmlFor="checkboxOne">Essentials</label></li>
          <li><input type="checkbox" id="checkboxTwo" defaultValue="Cotton Candy" defaultChecked /><label htmlFor="checkboxTwo">Cooking basics</label></li>
          <li><input type="checkbox" id="checkboxThree" defaultValue="Rarity" defaultChecked /><label htmlFor="checkboxThree">Desk/workspace</label></li>
          <li><input type="checkbox" id="checkboxFour" defaultValue="Moondancer" /><label htmlFor="checkboxFour">Hair dryer</label></li>
          <li><input type="checkbox" id="checkboxFive" defaultValue="Surprise" /><label htmlFor="checkboxFive">TV</label></li>
          <li><input type="checkbox" id="checkboxSix" defaultValue="Twilight Sparkle" defaultChecked /><label htmlFor="checkboxSix">Wifi
              Sparkle</label></li>
          <li><input type="checkbox" id="checkboxSeven" defaultValue="Fluttershy" /><label htmlFor="checkboxSeven">Breakfast, coffee, tea</label></li>
          <li><input type="checkbox" id="checkboxEight" defaultValue="Derpy Hooves" /><label htmlFor="checkboxEight">Derpy Hooves</label></li>
          <li><input type="checkbox" id="checkboxNine" defaultValue="Princess Celestia" /><label htmlFor="checkboxNine">Princess
              Celestia</label></li>
          <li><input type="checkbox" id="checkboxTen" defaultValue="Gusty" /><label htmlFor="checkboxTen">Gusty</label></li>
          <li className="ks-selected"><input type="checkbox" id="checkboxEleven" defaultValue="Discord" /><label htmlFor="checkboxEleven">Discord</label></li>
          <li><input type="checkbox" id="checkboxTwelve" defaultValue="Clover" /><label htmlFor="checkboxTwelve">Clover</label></li>
          <li><input type="checkbox" id="checkboxThirteen" defaultValue="Baby Moondancer" /><label htmlFor="checkboxThirteen">Baby
              Moondancer</label></li>
          <li><input type="checkbox" id="checkboxFourteen" defaultValue="Medley" /><label htmlFor="checkboxFourteen">Medley</label></li>
          <li><input type="checkbox" id="checkboxFifteen" defaultValue="Firefly" /><label htmlFor="checkboxFifteen">Firefly</label></li>
        </ul>
        
        </div>

        <div style={{marginTop:"200px", marginLeft:"30px"}} className="row">
        <h4 style={{ color:"#008f94", fontSize:"19px", fontWeight:"bold", marginTop:"10px"}}>What spaces can guests use??</h4>
        <div style={{marginLeft:"-260px"}} className=" body-checkbox col">
        <ul style={{height:"120px", width:"550px"}}  className="ks-cboxtags ul">
          <li><input type="checkbox" id="checkbox1" defaultValue="Rainbow Dash" />  <label htmlFor="checkbox1">Kitchen</label></li>
          <li><input type="checkbox" id="checkbox6" defaultValue="Cotton Candy" defaultChecked /><label htmlFor="checkbox6">Pool</label></li>
          <li><input type="checkbox" id="checkbox3" defaultValue="Rarity" defaultChecked /><label htmlFor="checkbox3">Elevator</label></li>
          <li><input type="checkbox" id="checkbox4" defaultValue="Moondancer" /><label htmlFor="checkbox4">Parking</label></li>
          <li><input type="checkbox" id="checkboxFive" defaultValue="Surprise" /><label htmlFor="checkboxFive">TV</label></li>
          <li><input type="checkbox" id="checkboxSix" defaultValue="Twilight Sparkle" defaultChecked /><label htmlFor="checkboxSix">Wifi
              Sparkle</label></li>
          <li><input type="checkbox" id="checkboxSeven" defaultValue="Fluttershy" /><label htmlFor="checkboxSeven">Breakfast, coffee, tea</label></li>
          <li><input type="checkbox" id="checkboxEight" defaultValue="Derpy Hooves" /><label htmlFor="checkboxEight">Derpy Hooves</label></li>
          <li><input type="checkbox" id="checkboxNine" defaultValue="Princess Celestia" /><label htmlFor="checkboxNine">Princess
              Celestia</label></li>
          <li><input type="checkbox" id="checkboxTen" defaultValue="Gusty" /><label htmlFor="checkboxTen">Gusty</label></li>
          <li className="ks-selected"><input type="checkbox" id="checkboxEleven" defaultValue="Discord" /><label htmlFor="checkboxEleven">Discord</label></li>
          <li><input type="checkbox" id="checkboxTwelve" defaultValue="Clover" /><label htmlFor="checkboxTwelve">Clover</label></li>
          <li><input type="checkbox" id="checkboxThirteen" defaultValue="Baby Moondancer" /><label htmlFor="checkboxThirteen">Baby
              Moondancer</label></li>
          <li><input type="checkbox" id="checkboxFourteen" defaultValue="Medley" /><label htmlFor="checkboxFourteen">Medley</label></li>
          <li><input type="checkbox" id="checkboxFifteen" defaultValue="Firefly" /><label htmlFor="checkboxFifteen">Firefly</label></li>
        </ul>
        
        </div>
                            </div>
        
                            </div>
                        </div>
                        </div>
                        
                        <div style={{marginTop:"-2px", marginLeft:"-24px"}} className="row line">
                        <div style={{width:"420px"}} className="row line2">
                       
                       </div>
                        </div>
                        <div style={{height:"100px", marginTop:"25px"}} className="row">
                        <div className="col-8">
                        <a style={{fontSize:"18px", marginLeft:"30px",  marginTop:"15px !important"}}  href="https://vimeo.com/channels/staffpicks/93951774" data-fancybox className="text-uppercase letter-spacing-1"><i class="fas fa-arrow-left"></i> <u>Back </u></a>
                        </div>
                        <div className="col-4">
                        <Link style={{marginLeft:"30px", marginTop:"-10px"}} to="/contact" class='btn btn-primary'>Next  &nbsp; &nbsp; <i class="fas fa-arrow-right"></i></Link>
                        </div>
                        </div>
                    </div>
                    
                </div>
             </div>
             
        </div>)
   
}


