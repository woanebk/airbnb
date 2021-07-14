import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  "./searchLisst.css"
import  "./searchList.scss"
import SearchResult from './searchResult'

export class SearchList extends Component {
    render() {
        return (<div>
             <div className="container-fuild">
                    <nav style={{height:"80px", background:"white"}} className="nav navbar navbar-expand-md navbar-light sticky-top">
                        <img style={{width:"130px", height:"40px", marginTop:"px", marginLeft:"100px"}} src="/assets/images/accommodation/logo2.png"></img>
                            <a style={{ marginBottom:"30px", marginLeft:"20px", marginTop:"25px"}} href='#' class='active'>Result</a>
                           
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8">
                            <div className='searchPage'>
            <div style={{marginBottom:"-20px"}} className='searchPage__info'>
                <p style={{fontSize:"19px", marginLeft:"20px"}}>62 stays · 26 august to 30 august · 2 guest</p>
                <h2 style={{color:"#008f94", marginLeft:"20px", fontSize:"26px"}}>Stays nearby</h2>
               
            </div>
           
            <div>
        <div className="blog-card">
          <div className="meta">
            <div className="photo" style={{backgroundImage: 'url(https://safehouz.com/wp-content/uploads/2019/07/40-Beautiful-Girls-Room-Decorating-Ideas-07.jpg)'}} />
            <ul className="details">
            
            <ul style={{fontSize:"19px"}} className="details">
                          <li ><i class="far fa-money-bill-alt"></i> &nbsp; price="£30 / night"</li>
                          <li > <i class="far fa-calendar-alt"> </i>&nbsp; total="£117 total"</li>
                          <li > <i class="far fa-star"></i>&nbsp; 4.9 &nbsp; &nbsp;(300 reviews) </li>
                        </ul>
            </ul>
          </div>
          <div className="description">
            <h1>Room in center of London</h1>
            <h2>Stay at this spacious Edwardian House</h2>
            <p> 1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms</p>
            <p>A modern, well-equipped studio apartment just minutes from main tourist spots  like Ben Thanh...</p>
            <p className="read-more">
              <a href="#"><i style={{fontSize:"25px"}} class="far fa-heart"></i></a>
            </p>
          </div>
        </div>
        <div style={{marginTop:"30px"}} className="blog-card alt">
          <div className="meta">
            <div className="photo" style={{backgroundImage: 'url(https://i0.wp.com/www.stylezco.com/wp-content/uploads/2019/03/Beautiful-Bedroom-Decoration-Ideas.jpg?fit=586%2C632&ssl=1)'}} />
            <ul className="details">
            <ul style={{fontSize:"19px"}} className="details">
                          <li ><i class="far fa-money-bill-alt"></i> &nbsp; price="£30 / night"</li>
                          <li > <i class="far fa-calendar-alt"> </i>&nbsp; total="£117 total"</li>
                          <li > <i class="far fa-star"></i>&nbsp; 4.9 &nbsp; &nbsp;(300 reviews) </li>
                        </ul>
            </ul>
          </div>
          <div className="description">
          <h1>Room in center of London</h1>
            <h2>Stay at this spacious Edwardian House</h2>
            <p> 1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms</p>
            <p>A modern, well-equipped studio apartment just minutes from main tourist spots  like Ben Thanh...</p>
            <p className="read-more">
            <a href="#"><i style={{fontSize:"25px"}} class="far fa-heart"></i></a>
            </p>
          </div>
        </div>

        <div className="blog-card">
          <div className="meta">
            <div className="photo" style={{backgroundImage: 'url(https://roohome.com/wp-content/uploads/2019/08/pink-bed.jpg)'}} />
            <ul className="details">
            
            <ul style={{fontSize:"19px"}} className="details">
                          <li ><i class="far fa-money-bill-alt"></i> &nbsp; price="£30 / night"</li>
                          <li > <i class="far fa-calendar-alt"> </i>&nbsp; total="£117 total"</li>
                          <li > <i class="far fa-star"></i>&nbsp; 4.9 &nbsp; &nbsp;(300 reviews) </li>
                        </ul>
            </ul>
          </div>
          <div className="description">
            <h1>Room in center of London</h1>
            <h2>Stay at this spacious Edwardian House</h2>
            <p> 1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms</p>
            <p>A modern, well-equipped studio apartment just minutes from main tourist spots  like Ben Thanh...</p>
            <p className="read-more">
              <a href="#"><i style={{fontSize:"25px"}} class="far fa-heart"></i></a>
            </p>
          </div>
        </div>
        <div style={{marginTop:"30px"}} className="blog-card alt">
          <div className="meta">
            <div className="photo" style={{backgroundImage: 'url(https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2018/01/27162246/15.jpg)'}} />
            <ul className="details">
            <ul style={{fontSize:"19px"}} className="details">
                          <li ><i class="far fa-money-bill-alt"></i> &nbsp; price="£30 / night"</li>
                          <li > <i class="far fa-calendar-alt"> </i>&nbsp; total="£117 total"</li>
                          <li > <i class="far fa-star"></i>&nbsp; 4.9 &nbsp; &nbsp;(300 reviews) </li>
                        </ul>
            </ul>
          </div>
          <div className="description">
          <h1>Room in center of London</h1>
            <h2>Stay at this spacious Edwardian House</h2>
            <p> 1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms</p>
            <p>A modern, well-equipped studio apartment just minutes from main tourist spots  like Ben Thanh...</p>
            <p className="read-more">
            <a href="#"><i style={{fontSize:"25px"}} class="far fa-heart"></i></a>
            </p>
          </div>
        </div>

        <div className="blog-card">
          <div className="meta">
            <div className="photo" style={{backgroundImage: 'url(https://roomdsign.com/wp-content/uploads/2020/06/simple-modern-bedroom-with-pink-accent-wall.jpg)'}} />
            <ul className="details">
            
            <ul style={{fontSize:"19px"}} className="details">
                          <li ><i class="far fa-money-bill-alt"></i> &nbsp; price="£30 / night"</li>
                          <li > <i class="far fa-calendar-alt"> </i>&nbsp; total="£117 total"</li>
                          <li > <i class="far fa-star"></i>&nbsp; 4.9 &nbsp; &nbsp;(300 reviews) </li>
                        </ul>
            </ul>
          </div>
          <div className="description">
            <h1>Room in center of London</h1>
            <h2>Stay at this spacious Edwardian House</h2>
            <p> 1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms</p>
            <p>A modern, well-equipped studio apartment just minutes from main tourist spots  like Ben Thanh...</p>
            <p className="read-more">
              <a href="#"><i style={{fontSize:"25px"}} class="far fa-heart"></i></a>
            </p>
          </div>
        </div>
        <div style={{marginTop:"30px"}} className="blog-card alt">
          <div className="meta">
            <div className="photo" style={{backgroundImage: 'url(https://media.istockphoto.com/photos/3d-rendering-beautiful-pink-vintage-kid-bedroom-picture-id888540350?k=6&m=888540350&s=170667a&w=0&h=tIbRO1eh5Rpm4z0qU6n93K_AEbQv7yFezGV40-RUaRY=)'}} />
            <ul className="details">
            <ul style={{fontSize:"19px"}} className="details">
                          <li ><i class="far fa-money-bill-alt"></i> &nbsp; price="£30 / night"</li>
                          <li > <i class="far fa-calendar-alt"> </i>&nbsp; total="£117 total"</li>
                          <li > <i class="far fa-star"></i>&nbsp; 4.9 &nbsp; &nbsp;(300 reviews) </li>
                        </ul>
            </ul>
          </div>
          <div className="description">
          <h1>Room in center of London</h1>
            <h2>Stay at this spacious Edwardian House</h2>
            <p> 1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms</p>
            <p>A modern, well-equipped studio apartment just minutes from main tourist spots  like Ben Thanh...</p>
            <p className="read-more">
            <a href="#"><i style={{fontSize:"25px"}} class="far fa-heart"></i></a>
            </p>
          </div>
        </div>


      </div>

      

      

     
      

           
            <div id="app" className="container html">  
        <ul className="page">
         <li className="page__btn"><i class="fas fa-chevron-left"></i></li>
          <li className="page__numbers active"> 1</li>
          <li className="page__numbers">2</li>
          <li className="page__numbers">3</li>
          <li className="page__numbers">4</li>
          <li className="page__numbers">5</li>
          <li className="page__numbers">6</li>
          <li className="page__dots">...</li>
          <li className="page__numbers"> 10</li>
          <li className="page__btn"><i class="fas fa-chevron-right"></i></li>
        </ul>
      </div>
        </div>
                            </div>
                            <div className="col-4 map">
                            <iframe style={{border: 0, width: '100%', height: '600px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621=" frameBorder={0} allowFullScreen />
                            </div>
                        </div>
                    </div>
             </div>
        </div>)
    }
}

export default SearchList
