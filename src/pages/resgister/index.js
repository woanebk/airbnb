import React from 'react';
import "./style.css"

function Register(props) {
    return (
        <div>
             <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex">
                {/* Background image for card set in CSS! */}
                <h2>
                <span className="fa fa-android" />
                <img style={{marginTop:"170px", width:"260px", marginLeft:"50px"}} src="https://www.pngkit.com/png/full/60-606106_airbnb-logo-vector-airbnb.png"></img>
              </h2>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input style={{height:"35px"}} type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus />
                    <label htmlFor="inputUserame">Username</label>
                  </div>
                  <div className="form-label-group">
                    <input style={{height:"35px"}} type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <hr />
                  <div className="form-label-group">
                    <input style={{height:"35px"}} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="form-label-group">
                    <input style={{height:"35px"}} type="password" id="inputConfirmPassword" className="form-control" placeholder="Password" required />
                    <label htmlFor="inputConfirmPassword">Confirm password</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
                  <a className="d-block text-center mt-2 small" href="#">Sign In</a>
                  <hr className="my-4" />
                  <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> Sign up with Google</button>
                  <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> Sign up with Facebook</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>
    );
}

export default Register;