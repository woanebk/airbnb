import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './badges.css'
import './buttons.css'
import './landing.css'
import './layout.css'
import './links.css'
import './typography.css'
import farmImage from './images/farms.jpeg'
import apartmentImage from './images/apartment.jpg'
import doctorImage from './images/doctor.jpg'

export class index extends Component {
	render() {
		return (<div>
			<div>
				<div id='header' class='section'>
					<div class="container">
						<div class='logo-container'>
							<div class='logo'>AIRBNB</div>
						</div>
						<div class='nav-links'>
							<a href="#">Host your home</a>
							<Link  to="/becomeahost">Become a host</Link>
							<a href="#">Help</a>
							<a href="#">Login</a>
							<a href="#" class='sign-up-link'>Sign up</a>
						</div>

					</div>
				</div>

				<div id='content'>
					<div class='section search-section'>
						<div class='container'>
							<div class='tab-headers'>
								<a href='#' class='active'>Places to stay</a>
								<a href='#'>Monthly stays</a>
								<a href='#'>Experiences</a>
								<a href='#'>Online Experiences <span class='badge primary-badge'>New</span></a>
							</div>
							<div class='tab-body'>
								<div class='search-bar'>
									<div class='field'>
										<label>Location</label>
										<input type='text' placeholder='Add city, landmark, or address' />
									</div>
									<div class='divider'></div>
									<div class='field'>
										<label>Check-in / Checkout</label>
										<input type='text' placeholder='Add dates' />
									</div>
									<div class='divider'></div>
									<div class='field'>
										<label>Guests</label>
										<input type='text' placeholder='Add guests' />
									</div>
									<div class='actions'>
										<Link to={"/result"} class='btn btn-primary'>Search</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class='section featured-section'>
						<div class='container'>
							<h2>We may be apart, but we'll get through this together</h2>

							<div class='tiles'>
								<div class='tile'>
									<div class='image-container'>
										{/* <span class='badge secondary-badge'>New</span> */}
										<img src={farmImage} />
									</div>
									<div class='writeup'>
										<div class='header'>
											Online Experiences
										</div>
										<div class='description'>
											Unique activities we can do together, led by
											a world of hosts.
										</div>
									</div>
								</div>

								<div class='tile'>
									<div class='image-container'>
										<img src={apartmentImage} />
									</div>
									<div class='writeup'>
										<div class='header'>
											Monthly stays
										</div>
										<div class='description'>
											Make Airbnb your home, for stays of a month
											or longer.
										</div>
									</div>
								</div>

								<div class='tile'>
									<div class='image-container'>
										{/* <span class='badge secondary-badge'>New</span> */}
										<img src={doctorImage} />
									</div>
									<div class='writeup'>
										<div class='header'>
											Front line stays
										</div>
										<div class='description'>
											Find or provide accommodations for COVID-19 responders.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class='section online-experiences-section'>
						<div class='container'>
							<h2>Introducing Online Experiences</h2>
						</div>
					</div>

					<div class='section host-a-hero-section'>
						<div class='container'>
							<h2>Host a hero: help us house front line responders around the world</h2>
						</div>
					</div>


					<div class='section stay-informed-section'>
						<div class='container'>
							<h2>Stay informed</h2>
						</div>
					</div>

					<div class='section future-trips-section'>
						<div class='container'>
							<h2>Destination for future trips</h2>
						</div>
					</div>
				</div>

				<div id='footer'>
					<div class="container">
						footer
					</div>
				</div>
			</div>
			<Link to="/about">About</Link>
		</div>)
	}
}

export default index


