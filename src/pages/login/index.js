import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <div>
      {/* Main Content */}
      <div className="container-fluid">
        <div className="row main-content bg-success text-center">
          <div className="col-md-4 text-center company__info">
            <span className="company__logo">
              <h2>
                <span className="fa fa-android" />
                <img style={{marginTop:"-40px"}} src="https://www.pngkit.com/png/full/60-606106_airbnb-logo-vector-airbnb.png"></img>
              </h2>
            </span>
            
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div style={{textAlign:"center"}} className="container-fluid">
              <div className="row">
                <h1 style={{fontSize:"28px", marginTop:"20px", marginLeft:"170px", color:"#008080", fontWeight:"bold"}} >Log In</h1>
              </div>
              <div className="row">
                <form control className="form-group">
                  <div className="row">
                    <input style={{ marginBottom:"-10px"}} type="text" name="username" id="username" className="form__input" placeholder="Username" />
                  </div>
                  <div className="row">
                    {/* <span class="fa fa-lock"></span> */}
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form__input"
                      placeholder="Password"
                      style={{width:"370px"}}
                    />
                  </div>
                  <div className="row">
                    <input style={{marginLeft:"100px"}} type="checkbox" name="remember_me" id="remember_me" className />
                    <label style={{marginTop:"-20px"}} htmlFor="remember_me">Remember Me!</label>
                  </div>
                  <div className="row">
                    <Link to='/home' style={{height:"50px", marginLeft:"60px", marginTop:"8px"}} type="submit" defaultValue="Submit" className="btn1" >Submit</Link>
                  </div>
                </form>
              </div>
              <div className="row">
                <h2 style={{marginTop:"-20px", marginBottom:"20px", marginLeft:"20px"}}>
                  Don't have an account? <Link to='/register' >Register Here</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
