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
                        <img style={{width:"130px", height:"40px", marginTop:"px", marginLeft:"100px"}} src="data:image/png;base64,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"></img>
                            <a style={{ marginBottom:"30px", marginLeft:"20px", marginTop:"25px"}} href='#' class='active'>Result</a>
                            <img style={{marginLeft:"190px", marginTop:"12px", marginBottom:"15px"}} src="assets/images/accommodation/search.png"></img>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8">
                            <div className='searchPage'>
            <div style={{marginBottom:"-20px"}} className='searchPage__info'>
                <p style={{fontSize:"18px"}}>62 stays · 26 august to 30 august · 2 guest</p>
                <h2 style={{color:"#ff385c"}}>Stays nearby</h2>
               
            </div>
            <SearchResult
                 img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-colors-heidi-caillier-design-seattle-interior-designer-pink-walls-master-bedroom-yellow-printed-chair-blue-blanket-bed-british-layered-print-mixing-n28-tudor-vintage-rug-sconces-tapered-lampshade-1576613640.jpg?crop=0.694xw:1.00xh;0.0417xw,0&resize=640:*"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />

            <SearchResult
                img="https://mb.cision.com/Public/15507/2751657/8c6f7f913f5a3465_800x800ar.jpg"
                location="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Dry Cleaning"
                star={4.3}
                price="£40 / night"
                total="£157 total"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of London"
                title="London Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine · Dry Cleaning"
                star={3.8}
                price="£35 / night"
                total="£207 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="£55 / night"
                total="£320 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="£60 / night"
                total="£450 total"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private room in center of London"
                title="The Blue Room In London"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine · Dry Cleaning"
                star={4.23}
                price="£65 / night"
                total="£480 total"
            />
            <SearchResult
               img="https://photo-cdn2.icons8.com/euQPuE6x2XhxuCSTWd4ctMO_t4EzLF0r0uhUnkCg7QA/rs:fit:1506:1072/Z3M6Ly9tb29zZTIv/YXNzZXRzL3NhdGEv/b3JpZ2luYWwvMzMv/ZGVkMWY4ODEtMzlk/MS00YmJmLWJhYzkt/MGZmMGMzMWYxNmQ3/LmpwZw.jpg"
                location="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="£90 / night"
                total="£650 total"
            />
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
