import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  "./introduce.css"

export class introduce extends Component {
    render() {
        return (<div>
             <section className="py-5 bg-light set-hight">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
              <figure className="img-absolute">
                <img src="assets/images/accommodation/food-1.jpg" alt="Image" className="img-fluid" />
              </figure>
              <img src="assets/images/accommodation/img_1.jpg" alt="Image" className="img-fluid rounded" />
            </div>
            <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
              <h2 style={{fontSize:"40px"}} className="heading">Welcome!</h2>
              <p style={{color:"#008080"}} className="mb-4">Become a Host in 3 easy steps.</p>
              <p>Please join us. We will help you through every step of the process.</p>
              <p><Link to={"/location"} className="bg-cyan px-6 py-3 rounded text-white font-bold inline-block my-2 ">Get started</Link> <span className="mr-3 font-family-serif"><em>or</em></span> <a href="https://vimeo.com/channels/staffpicks/93951774" data-fancybox className="text-uppercase letter-spacing-1">Back</a></p>


            </div>
          </div>
        </div>
      </section>
        </div>)
    }
}

export default introduce
