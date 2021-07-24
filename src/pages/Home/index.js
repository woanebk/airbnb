import React from 'react';
import './styles.css';
import './index.scss';
import _1 from './1.jpg';
import _2 from './2.jpg';
import _3 from './3.jpg';
import jeff from './jeff.jpg';
import lesley from './lesley.jpg';
import denise from './denise.jpg';
import just_booked_1 from './just-booked-1.jpg';
import just_booked_2 from './just-booked-2.jpg';
import just_booked_3 from './just-booked-3.jpg';
import just_booked_4 from './just-booked-4.jpg';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increase = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const decrease = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  return (
    <>
      <body class="antialiased text-gray-800" style={{ margin: 0 }}>
        <div class="relative bg-img bg-no-repeat bg-cover lg:bg-center p-6 bg-top-right">
          <a href="/">
            <h1>
              <span class="sr-only">AirBnb</span>
              <svg
                viewBox="0 0 1000 1000"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{ height: 32, width: 32, display: 'block', fill: '#ffffff' }}
              >
                <title>AirBnb</title>
                <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
              </svg>
            </h1>
          </a>

          <div style={{marginLeft:"970px", marginTop:"-30px" }} className="col-4">
            <div className="text-center">
              <Link to="/login" className="btn  btn_normal mr5 mb3 mt3">
              <i class="fas fa-sign-in-alt"></i> &nbsp; &nbsp; Login
              </Link>
              <Link style={{ marginLeft: '20px' }} className="btn  btn_normal mr5 mb3 mt3">
                <i class="far fa-question-circle"></i> &nbsp; Sign up
              </Link>
            </div>
          </div>
       
     

          <div class="max-w-5xl mx-auto lg:py-32 py-4">
            <h2 style={{ textAlign: 'center' }} class="lg:text-5xl text-4xl font-semibold text-white leading-none mb-4">
              Book a trip. Host travels. All on Airbnb.
            </h2>
            <div class="flex items-center flex-wrap justify-start max-w-2xl lg:mx-0 mx-auto">
              <div class="lg:pr-5 w-full lg:w-1/2 mb-4 lg:mb-0">
                <p class="text-white mb-2 tracking-wide">Find places to stay and things to do</p>
                <a
                  href="#"
                  class="transition bg-white px-10 py-3 rounded font-bold hover:bg-gray-300 block w-full text-center border-2 border-white"
                >
                  Explore
                </a>
              </div>
              <div style={{ marginBottom: '23px' }} class="lg:pl-5 w-full lg:w-1/2">
                <p class="text-white mb-2 tracking-wide">Earn money from your extra space</p>
                <Link
                  to="/becomeahost"
                  class="transition border-2 border-white bg-transparent px-10 py-3 rounded text-white font-bold hover:bg-gray-800 block w-full text-center"
                >
                  Host
                </Link>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: '240px', marginTop: '60px' }} id="booking" className="section">
            <h3 class="font-bold bold text-2xl mb-4 leading-none">Book unique homes and experiences</h3>
            <div className="section-center">
              <div className="container">
                <div className="row">
                  <div className="booking-form">
                    <form>
                      <div className="row no-margin">
                        <div className="col-md-12">
                          <div className="row no-margin">
                            <div className="col-md-2">
                              <span style={{fontWeight:"bold"}}>Destination</span>
                              <div className="form-group">
                                <select placeholder="select Destination " className="form-control">
                                  <option>Da Nang</option>
                                  <option>Ho Chi Minh</option>
                                  <option>Ha Noi</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-md-3">
                              <div className="form-group">
                                <span style={{fontWeight:"bold"}} className="form-label">Check In</span>
                                <input className="form-control" type="date" />
                              </div>
                            </div>

                            <div className="col-md-3">
                              <div className="form-group">
                                <span style={{fontWeight:"bold"}} className="form-label">Check out</span>
                                <input className="form-control" type="date" />
                              </div>
                            </div>

                            <div className="col-md-2">
                              <span style={{fontWeight:"bold"}} className="form-label">Guests</span>
                              <div className="form-group">
                                <div className="app1">
                                  {
                                    // if else statement to determine color of the counter
                                  }

                                  <div style={{ marginTop: '5px' }} className="button__wrapper">
                                    <button onClick={decrease}>-</button>
                                    <h1
                                      style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '-10px', textAlign:"center" }}
                                      className={count > 0 ? 'positive' : count < 0 ? 'negative' : null}
                                    >
                                      {count}
                                    </h1>
                                    <button style={{ marginLeft: '-10px' }} onClick={increase}>
                                      +
                                    </button>
                                  </div>
                                </div>
                                <span className="select-arrow" />
                              </div>
                            </div>

                            <div className="col-md-2">
                              <Link
                                style={{ marginTop: '20px', height: '45px' }}
                                to="/searchresult"
                                type="submit"
                                defaultValue="Search"
                                className="form-control btn btn-primary"
                              >
                                {' '}
                                <i class="fas fa-search"></i> &nbsp; Search
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-5xl mx-auto lg:py-16 py-12 lg:px-0 px-4">
          <h3 class="font-bold bold text-2xl lg:mb-2 mb-4 leading-none">Live anywhere</h3>

          <div className="cards-list">
            <div className="card 1 card1">
              <div className="card_image">
                {' '}
                <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{' '}
              </div>
              <div className="card_title title-white">
                <p>Unique Stay</p>
              </div>
            </div>
            <div className="card 2 card1">
              <div className="card_image">
                <img src="https://media1.popsugar-assets.com/files/thumbor/Nd5p9XJMuX_mvnHzBFNb-MK9XHs/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/01/21/032/n/1922243/7c0e0ba9_edit_img_image_14690959_1453249161/i/Cute-Dog-GIFs.png" />
              </div>
              <div className="card_title title-white">
                <p>Pet allowed</p>
              </div>
            </div>
            <div className="card 3 card1">
              <div className="card_image">
                <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
              </div>
              <div className="card_title">
                <p>Entire home</p>
              </div>
            </div>
            <div className="card 4 card1">
              <div className="card_image">
                <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
              </div>
              <div className="card_title title-black">
                <p>Outdoor</p>
              </div>
            </div>
          </div>

          <h3 style={{ marginTop: '40px' }} class="font-bold bold text-2xl lg:mb-2 mb-4 leading-none">
            What guests are saying about homes in the Viet Nam
          </h3>

          <div class="flex lg:items-center items-start">
            <svg
              class="w-4 h-4 flex-shrink-0"
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{ height: 24, width: 24, fill: '#FFB400' }}
            >
              <path
                d="m21.95 9.48a.84.84 0 0 0 -.87-.48h-4.62a.5.5 0 0 0 0 1l4.14.01-4.81 4.17a.5.5 0 0 0 -.14.57l2.65 6.38-6.07-3.72a.5.5 0 0 0 -.52 0l-6.08 3.72 2.65-6.37a.5.5 0 0 0 -.13-.57l-4.75-4.18h5.75a.5.5 0 0 0 .46-.3l2.37-5.37 1.58 3.57a.5.5 0 0 0 .91-.41l-1.72-3.88a.8.8 0 0 0 -1.56-.01l-2.38 5.39h-5.9a.83.83 0 0 0 -.87.48.85.85 0 0 0 .32.96l4.85 4.25-2.78 6.67a.81.81 0 0 0 .16.98.66.66 0 0 0 .43.15 1.1 1.1 0 0 0 .56-.18l6.37-3.91 6.38 3.92a.81.81 0 0 0 .99.03c.15-.12.37-.41.15-1l-2.77-6.66 4.92-4.26a.84.84 0 0 0 .31-.95zm-.78.53h-.01"
                fill="#484848"
              ></path>
              <path d="m11 21.5a.5.5 0 1 1 -.5-.5.5.5 0 0 1 .5.5zm-3.5-15.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm15 10h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-15-13h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm10.22 7.54a.84.84 0 0 0 -.17-.02q-.28-.01-3.19 0a .6.6 0 0 1 -.55-.35l-1.5-3.23a.42.42 0 0 0 -.75 0l-1.81 4.14a2.92 2.92 0 0 0 4.12 3.72l.46-.26 3.49-2.99.16-.18a.5.5 0 0 0 -.26-.82z"></path>
            </svg>
            <p class="pl-2">
              Viet Nam homes were <strong>rated 4.8 out of 5 stars</strong> with <strong>42,500,000+ reviews</strong>
            </p>
          </div>

          <section class="flex items-start flex-wrap justify-between lg:my-10 my-6">
            <article class="lg:w-1/3 w-full lg:pr-4 lg:mb-0 mb-6">
              <img class="object-cover rounded w-full" src={_1} />
              <div class="my-3 flex justify-start items-center">
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
              </div>

              <p class="text-gray-700 font-light text-sm leading-snug">
                What a wonderful little cottage! More spacious and adorable than the pictures show. We never met our
                hosts, but we felt welcomed and...{' '}
              </p>

              <div class="flex items-center justify-start my-4">
                <img src={jeff} class="w-12 h-12 rounded-full flex-shrink-0" />
                <div class="flex-1 pl-4 text-sm">
                  <p class="font-semibold leading-none">Jeff</p>
                  <p>Vung Tau</p>
                </div>
              </div>
            </article>

            <article class="lg:w-1/3 w-full lg:px-2 lg:mb-0 mb-6">
              <img class="object-cover rounded w-full" src={_2} />
              <div class="my-3 flex justify-start items-center">
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
              </div>

              <p class="text-gray-700 font-light text-sm leading-snug">
                What a wonderful little cottage! More spacious and adorable than the pictures show. We never met our
                hosts, but we felt welcomed and...{' '}
              </p>

              <div class="flex items-center justify-start my-4">
                <img src={lesley} class="w-12 h-12 rounded-full flex-shrink-0" />
                <div class="flex-1 pl-4 text-sm">
                  <p class="font-semibold leading-none">Lesley</p>
                  <p>Nha Trang</p>
                </div>
              </div>
            </article>

            <article class="lg:w-1/3 w-full lg:pl-4 lg:mb-0 mb-6">
              <img class="object-cover rounded w-full" src={_3} />
              <div class="my-3 flex justify-start items-center">
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-4 h-4 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
              </div>

              <p class="text-gray-700 font-light text-sm leading-snug">
                What a wonderful little cottage! More spacious and adorable than the pictures show. We never met our
                hosts, but we felt welcomed and...{' '}
              </p>

              <div class="flex items-center justify-start my-4">
                <img src={denise} class="w-12 h-12 rounded-full flex-shrink-0" />
                <div class="flex-1 pl-4 text-sm">
                  <p class="font-semibold leading-none">Denise</p>
                  <p>Da Lat</p>
                </div>
              </div>
            </article>
          </section>

          <h3 class="font-bold bold text-2xl lg:mb-2 mb-4 leading-none pb-4 border-b border-gray-300">
            Traveling with AirBnb
          </h3>
          <section class="flex items-start flex-wrap justify-between lg:my-8 my-6 border-b border-gray-300 pb-8">
            <div class="lg:w-1/3 w-full lg:pr-4 lg:mb-0 mb-6">
              <svg
                class="w-8 h-8"
                viewBox="0 0 24 24"
                fill="#60B6B5"
                fill-opacity="0"
                stroke="#60B6B5"
                stroke-width="1"
                focusable="false"
                aria-hidden="true"
                role="presentation"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p class="font-bold mt-3 mb-1">24/7 customer support</p>
              <p class="text-gray-700 font-light text-sm leading-snug">
                Day or night, we’re here for you. Talk to our support team from anywhere in the world, any hour of day.
              </p>
            </div>

            <div class="lg:w-1/3 w-full lg:px-2 lg:mb-0 mb-6">
              <svg
                class="w-8 h-8"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                fill="#60B6B5"
              >
                <path
                  d="m23.57 11.4-1.75-1.76-3.85-3.87-1.78-1.79-2.7-2.71-.82-.83-.22-.23-.06-.06c-.22-.22-.53-.22-.73-.02l-1.75 1.76-3.85 3.87-3.85 3.87-1.75 1.76a1.49 1.49 0 0 0 -.44 1.05v.01c0 .38.15.77.44 1.06l.55.55a1.49 1.49 0 0 0 2.01.08v8.4c0 .81.68 1.45 1.5 1.45h15c .82 0 1.5-.65 1.5-1.45v-8.4c.59.49 1.45.47 2.01-.08l.55-.55c.29-.29.44-.68.44-1.06v-.01c0-.38-.14-.77-.44-1.06zm-3.57 11.16c0 .24-.22.45-.5.45h-15c-.28 0-.5-.21-.5-.45v-9.36l8-7.99 8 7.99zm2.85-9.74-.55.55c-.2.2-.52.2-.71.01l-9.24-9.22a.5.5 0 0 0 -.71 0l-9.24 9.22a.5.5 0 0 1 -.71-.01l-.55-.55a.5.5 0 0 1 -.01-.71l1.75-1.76 3.85-3.87 3.85-3.87 1.4-1.4.77.77 2.7 2.71 1.78 1.79 3.85 3.87 1.75 1.76a.51.51 0 0 1 -.01.71z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <p class="font-bold mt-3 mb-1">Global hospitality standards</p>
              <p class="text-gray-700 font-light text-sm leading-snug">
                Guests review their hosts after each stay. All hosts must maintain a minimum rating and our hospitality
                standards to be on Airbnb.
              </p>
            </div>
            <div class="lg:w-1/3 w-full lg:pl-4">
              <svg
                class="w-8 h-8"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                fill="#60B6B5"
              >
                <path
                  d="m15.37 13.54-.01.01a.53.53 0 0 0 .01-.01m-.37 9.46h-11.5c-.28 0-.9-.22-1.38-.58-.71-.52-1.12-1.31-1.12-2.42 0-.04 0-.07.01-.11.09-1.1 1.59-2.44 4.02-3.79a33.14 33.14 0 0 1 2.9-1.42 35.57 35.57 0 0 1 1.31-.54c.63-.26.71-.95.18-1.35a4.55 4.55 0 0 1 -.38-.31 7.1 7.1 0 0 1 -.84-.9c-.73-.92-1.17-1.96-1.2-3.09v-2.99c.07-2.36 2.38-4.5 5.04-4.5 2.67 0 4.96 2.14 4.96 4.5v3c0 1.13-.43 2.17-1.15 3.11a7.35 7.35 0 0 1 -1.09 1.13l-.08.07c-.02.02-.02.02-.05.05s-.03.03-.09.14c-.05.47-.05.47.46.7a.49.49 0 0 0 .36-.15l.06-.05a8.32 8.32 0 0 0 1.23-1.28c.84-1.1 1.35-2.35 1.35-3.72v-3c0-2.92-2.75-5.5-5.96-5.5-3.2 0-5.96 2.56-6.04 5.49v3.01c.03 1.38.56 2.62 1.42 3.71.31.39.63.73.96 1.03.06.05.1.08.15.12a34.28 34.28 0 0 0 -3.98 1.87c-2.73 1.51-4.41 3.02-4.54 4.58a2.41 2.41 0 0 0 -.01.19c0 2.55 1.91 3.99 3.5 4h11.5a.5.5 0 1 0 0-1m7.67-4.22c-.36.74-.97 1.55-1.78 2.38a20.33 20.33 0 0 1 -1.89 1.71 19.94 19.94 0 0 1 -1.89-1.71c-.81-.83-1.42-1.64-1.78-2.38-.22-.45-.33-.86-.33-1.23 0-.99.61-1.56 1.43-1.56.7 0 1.55.53 2.18 1.31a.5.5 0 0 0 .78 0c .63-.78 1.48-1.31 2.18-1.31.82 0 1.43.57 1.43 1.56 0 .36-.11.77-.33 1.23m-1.1-3.78c-.89 0-1.82.5-2.57 1.25-.75-.76-1.68-1.25-2.57-1.25-1.36 0-2.43 1.01-2.43 2.56 0 .53.15 1.08.43 1.66.41.85 1.09 1.74 1.96 2.64a21.09 21.09 0 0 0 2.31 2.05.5.5 0 0 0 .6 0 20.91 20.91 0 0 0 2.31-2.05c.87-.9 1.55-1.79 1.96-2.64.28-.58.43-1.13.43-1.66 0-1.55-1.07-2.56-2.43-2.56"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <p class="font-bold mt-3 mb-1">5-star hosts</p>
              <p class="text-gray-700 font-light text-sm leading-snug">
                From fresh-pressed sheets to tips on where to get the best brunch, our hosts are full of local
                hospitality.
              </p>
            </div>
          </section>

          {/*galley start*/}
          <section id="gallery" className="gallery">
            <div className="container">
              <div className="gallery-details">
                <div className="gallary-header text-center">
                  <h2>top destination</h2>
                  <p>Where do you wanna go? How much you wanna explore?</p>
                </div>
                {/*/.gallery-header*/}
                <div className="gallery-box">
                  <div className="gallery-content">
                    <div className="filtr-container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="filtr-item">
                            <img src="assets/images/gallary/g1.jpg" alt="portfolio image" />
                            <div className="item-title">
                              <a href="#">china</a>
                              <p>
                                <span>20 stays</span> &nbsp;&nbsp;&nbsp;<p>30 minutes drive</p>
                              </p>
                            </div>
                            {/* /.item-title */}
                          </div>
                          {/* /.filtr-item */}
                        </div>
                        {/* /.col */}
                        <div className="col-md-6">
                          <div className="filtr-item">
                            <img src="assets/images/gallary/g2.jpg" alt="portfolio image" />
                            <div className="item-title">
                              <a href="#">venuzuala</a>
                              <p>
                                <span>20 stays</span> &nbsp;&nbsp;&nbsp;<p>30 minutes drive</p>
                              </p>
                            </div>{' '}
                            {/* /.item-title*/}
                          </div>
                          {/* /.filtr-item */}
                        </div>
                        {/* /.col */}
                        <div className="col-md-4">
                          <div className="filtr-item">
                            <img src="assets/images/gallary/g3.jpg" alt="portfolio image" />
                            <div className="item-title">
                              <a href="#">brazil</a>
                              <p>
                                <span>20 stays</span> &nbsp;&nbsp;&nbsp;<p>30 minutes drive</p>
                              </p>
                            </div>
                            {/* /.item-title */}
                          </div>
                          {/* /.filtr-item */}
                        </div>
                        {/* /.col */}
                        <div className="col-md-4">
                          <div className="filtr-item">
                            <img src="assets/images/gallary/g4.jpg" alt="portfolio image" />
                            <div className="item-title">
                              <a href="#">australia</a>
                              <p>
                                <span>25 stays</span> &nbsp;&nbsp;&nbsp;<p>30 minutes drive</p>
                              </p>
                            </div>{' '}
                            {/* /.item-title*/}
                          </div>
                          {/* /.filtr-item */}
                        </div>
                        {/* /.col */}
                        <div className="col-md-4">
                          <div className="filtr-item">
                            <img src="assets/images/gallary/g5.jpg" alt="portfolio image" />
                            <div className="item-title">
                              <a href="#">netharlands</a>
                              <p>
                                <span>90 stays</span> &nbsp;&nbsp;&nbsp;<p>30 minutes drive</p>
                              </p>
                            </div>{' '}
                            {/* /.item-title*/}
                          </div>
                          {/* /.filtr-item */}
                        </div>
                        {/* /.col */}
                        <div style={{ marginTop: '-290px', marginLeft: '328px' }} className="col-md-8">
                          <div className="filtr-item">
                            <img src="assets/images/gallary/g6.jpg" alt="portfolio image" />
                            <div className="item-title">
                              <a href="#">turkey</a>
                              <p>
                                <span>20 stays</span> &nbsp;&nbsp;&nbsp;<p>30 minutes drive</p>
                              </p>
                            </div>{' '}
                            {/* /.item-title*/}
                          </div>
                          {/* /.filtr-item */}
                        </div>
                        {/* /.col */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.filtr-container*/}
                  </div>
                  {/* /.gallery-content */}
                </div>
                {/*/.galley-box*/}
              </div>
              {/*/.gallery-details*/}
            </div>
            {/*/.container*/}
          </section>
          {/*/.gallery*/}
          {/*gallery end*/}

          <h3 class="font-bold bold text-2xl lg:mb-2 mb-4 leading-none">Just booked in the Viet Nam</h3>

          <section class="flex items-start flex-wrap justify-between lg:my-8 my-6">
            <a href="#" class="lg:w-1/4 md:w-1/2 w-full lg:pr-2 md:pr-2 lg:mb-0 mb-6">
              <img src={just_booked_1} class="object-cover w-full" />

              <p class="uppercase text-gray-600 text-xs font-bold pt-2">
                Entire House <span aria-hidden="true">•</span> Joshua Tree
              </p>
              <h4 class="font-medium my-1 text-lg leading-snug">The Joshua Tree House</h4>
              <p class="text-gray-600 text-sm mb-1">$285/night</p>
              <div class="flex items-center">
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <p class="text-xs text-gray-600">
                  467 <span aria-hidden>•</span> Superhost
                </p>
              </div>
            </a>
            <a href="#" class="lg:w-1/4 md:w-1/2 w-full lg:px-1 md:px-1 lg:mb-0 mb-6">
              <img src={just_booked_2} class="object-cover w-full" />
              <p class="uppercase text-gray-600 text-xs font-bold pt-2">
                Dome house <span aria-hidden="true">•</span> Aptos
              </p>
              <h4 class="font-medium my-1 text-lg leading-snug">Mushroom Dome Cabin: #1 on airbnb in the world</h4>
              <p class="text-gray-600 text-sm mb-1">$130/night</p>
              <div class="flex items-center">
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <p class="text-xs text-gray-600">
                  1392 <span aria-hidden>•</span> Superhost
                </p>
              </div>
            </a>
            <a href="#" class="lg:w-1/4 md:w-1/2 w-full lg:px-1 md:px-1 lg:mb-0 mb-6">
              <img src={just_booked_3} class="object-cover w-full" />
              <p class="uppercase text-gray-600 text-xs font-bold pt-2 leading-snug">
                Earth house <span aria-hidden="true">•</span> Orondo
              </p>
              <h4 class="font-medium my-1 text-lg">Underground Hygge</h4>
              <p class="text-gray-600 text-sm mb-1">$150/night</p>
              <div class="flex items-center">
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <p class="text-xs text-gray-600">
                  552 <span aria-hidden>•</span> Superhost
                </p>
              </div>
            </a>
            <a href="#" class="lg:w-1/4 md:w-1/2 w-full lg:pl-2 md:pl-2">
              <img src={just_booked_4} class="object-cover w-full" />
              <p class="uppercase text-gray-600 text-xs font-bold pt-2">
                Entire house <span aria-hidden="true">•</span> Pioneertown
              </p>
              <h4 class="font-medium my-1 text-lg leading-snug">Off-grid itHouse</h4>
              <p class="text-gray-600 text-sm mb-1">$450/night</p>
              <div class="flex items-center">
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <svg
                  class="fill-current w-2 h-2 text-cyan mr-1"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
                <p class="text-xs text-gray-600">254</p>
              </div>
            </a>
          </section>

          <a href="#" class="text-cyan text-lg flex items-center font-medium">
            Show all (22,000+){' '}
            <svg
              viewBox="0 0 18 18"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              class="ml-2 relative w-3 h-3 fill-current text-cyan"
            >
              <path
                d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>

          <section class="lg:mt-16 mt-8">
            <h3 class="font-bold bold text-2xl lg:mb-2 mb-4 leading-none">When are you traveling?</h3>
            <p class="font-light">Add dates for updated pricing and availability</p>
            <a href="#" class="bg-cyan px-6 py-3 rounded text-white font-bold inline-block my-2">
              Add dates
            </a>
          </section>
          
        </div>
      </body>
      <Footer></Footer>
    </>
  );
}

export default App;
