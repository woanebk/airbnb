import React, { useState, useRef, useEffect } from 'react'
import './App.css';
import Carousel from './Image-Slider';
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { HiStar } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi"
import { FaRegCheckCircle, FaRegFlag, FaRegHeart, FaHeart } from 'react-icons/fa'
import styled from 'styled-components'
import Footer from './Footer'
import RatingForm from './RatingForm'
import PaymentForm from './PaymentForm'

import GoogleMapReact from 'google-map-react';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const badges = [
  {
    icon: './super-host.png',
    badgeContent: 'Superhost'
  }, {
    icon: './host-reviews.png',
    badgeContent: ' 1153 reviews'
  }, {
    icon: './verified.png',
    badgeContent: 'Verified'
  }
]

const rules = [
  'No smoking in the house',
  'Check-out is at 10am',
  'No loud noise, music, or parties',
  'Please report damages immediately',
  'Take out trash on trash day, excess trash will be subject to fees',
  'Please start laundry and place dishes in dishwasher upon checkout',
  'Enjoy your stay! The most important rule :3'
]

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDiaqD_Y9lwAxI4EDWDIP8tDYmZxiiRzVQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="Destination"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

const comments = [
  {
    imgURL: './user_1.png',
    userName: 'Alex',
    dateReview: '24/1/2020',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur, placeat repellat, veniam vitae vero assumenda maxime praesentium minus exercitationem dicta esse officiis earum magnam eum rerum nam dignissimos quisquam.Praesentium fuga quas voluptatibus adipisci. Magni repellendus molestiae omnis eaque, ullam dicta. Quaerat eaque velit eveniet nisi recusandae. Ad aliquam inventore id et voluptatibus exercitationem hic, reprehenderit deleniti iste corporis?'
  },
  {
    imgURL: './user_2.jpg',
    userName: 'Elon Musk',
    dateReview: '15/2/2021',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur, placeat repellat, veniam vitae vero assumenda maxime praesentium minus exercitationem dicta esse officiis earum magnam eum rerum nam dignissimos quisquam.Praesentium fuga quas voluptatibus adipisci. Magni repellendus molestiae omnis eaque, ullam dicta. Quaerat eaque velit eveniet nisi recusandae. Ad aliquam inventore id et voluptatibus exercitationem hic, reprehenderit deleniti iste corporis?'
  }

]

const Comment = (imgURL, userName, dateReview, comment, index) => {
  return (
    <div className="comment-container" key={index}>
      <div className="user-img-container" >
        <img src={require(`${imgURL}`).default} />
        <div class="username-datereview-container">
          <p class="username">{userName}</p>
          <p class="date-review">{dateReview}</p>
        </div>
      </div>
      <p class="comment">{comment}</p>
    </div>
  );
}

const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}))

const RoomSpecImgUrls = [{
  url1: './images/guests.png',
  url2: './images/bed.png',
}, {
  url1: './images/bath.png',
  url2: './images/free-parking.png',
}, {
  url1: './images/internet.png',
  url2: './images/air-conditioning.png'
}]

const GuestDisplay = (guestQuantity) => {
  if (guestQuantity === 1) {
    return ('1 guest');
  } else {
    return (guestQuantity + ' guests');
  }
}

const DateDisplay = (date, defaultString) => {
  if (date != null) {
    return (<p className="valid-date">{date}</p>);
  } else {
    return (<p className="date">{defaultString}</p>);
  }
}



function App() {
  const [layerSection, setLayerSection] = useState('');
  // const [isLayerDisplayed, setLayerDisplayed]=useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [chosenTitle, set_chosenTitle] = useState('Details');
  const [isQuantityDropDownOpened, set_QuantityDropDown] = useState(false);
  const [guestQuantity, set_QuestQuantity] = useState(1);
  const [checkinDate, setCheckInDate] = useState(null);
  const [checkoutDate, setCheckOutDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const LayerRouter = (layerSection) => {
    switch (layerSection) {
      case 'review':
        return (
          <div className="overlay-layer"><RatingForm props={() => setLayerSection('')} /></div>
        )
      case 'payment':
        return (
          <div className="overlay-layer"><PaymentForm props={() => setLayerSection('')} /></div>
        )
    }
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          set_QuantityDropDown(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return <div ref={wrapperRef} className="quantity-dropdown-wrapper">{isQuantityDropDownOpened && <QuantityDropDown />}</div>;
  }

  const QuantityDropDown = () => (
    <div className="quantity-dropdown">
      {
        [1, 2, 3, 4, 5, 6].map((item, index) => {
          if (item != guestQuantity) {
            return (
              <div key={index} className="quantity-item" onClick={() => {
                set_QuantityDropDown(false);
                set_QuestQuantity(item);
              }}>
                <p className="guests-quantity">{GuestDisplay(item)}</p>
              </div>
            );
          }
        })
      }
    </div>
  )
  const Title = (title) => {
    if (title === chosenTitle)
      return (
        <div className="container-title--active">
          <p className="section-title title--active" onClick={() => { set_chosenTitle(title) }}>{title}</p>
        </div>
      )
    else
      return (
        <div>
          <p className="section-title title--inactive" onClick={() => { set_chosenTitle(title) }}>{title}</p>
        </div>
      )
  }

  const TitleSectionContent = () => {
    const [searchContent, setSearchContent] = useState('')

    switch (chosenTitle) {
      case 'Details':
        return (<>
          <h1 className="room-title">Luxury department from the beach</h1>
          <div className="category-container">
            <h2 className="category-type">Entire apartment</h2>
            <p style={{ fontSize: 10, marginLeft: 5, marginRight: 5, color: '#808080' }}>•</p>
            <h3 className="category-location">Vung Tau</h3>
          </div>
          <div className="room-spec-container">
            {
              RoomSpecImgUrls.map((item, index) => (
                <div key={index} className="room-spec-img-container">
                  <img src={require(`${item.url1}`).default} className="room-spec-img" />
                  <img src={require(`${item.url2}`).default} className="room-spec-img" />
                </div>
              ))
            }
          </div>
          <div className="host-card">
            <div className="host-profile-img">
              <div className="host-profile-verified-badge">
              </div>
            </div>
            <div className="host-name-reviews-container">
              <div className="host-name-contactbutton-container">
                <p className="host-name">Hosted by Tommy</p>
                {/* <p style={{ fontSize: 12, marginLeft: 5, marginRight: 5, color: '#808080' }}>•</p> */}
                <p className="host-contactbutton">Contact</p>
              </div>
              <div className="host-reviews-verified-container">
                <p className="host-reviews-quantity">95 reviews</p>
                <p style={{ fontSize: 11, marginLeft: 5, marginRight: 5, color: '#808080' }}>•</p>
                <p className="host-verified">Verifed</p>
              </div>
            </div>
          </div>
          <div className="room-description">
            <p>About this listing</p>
            <span>Our apartment has 1 living room, dining space, 1 bedroom (1 double bed and sofa bed), 1 bathroom and the balcony. <br />- The bedroom:  Our view from the bedroom is romantic with the view of the grand hill shimmering. We provide air-conditioner, the bed topper, and the bolster.<br />- Kitchen: necessary facilities is provided to cook a delicious meal.<br />- Balcony: spacious balcony with a set of 2 cane-chairs vs 1 table, where guests relax and enjoy the stunning views of the blue sea with a delicious meal.</span>
          </div>
        </>)
      case 'Reviews':
        return (<div className="reviews-section-container">
          <div className="reviews-section-header">
            <div className="reviews-rating-container">
              <p className="rating-quantity">98 reviews</p>
              <div className="stars-group">
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
              </div>
            </div>

            <div className="search-box">
              <BiSearchAlt />
              <p className="place-holder">Search reviews</p>
            </div>
          </div>
          <div className="tag-container">
            <div className="tag">
              <p className="tag-content">Accuracy</p>
              <div className="stars-group">
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
              </div>
            </div>
            <div className="tag">
              <p className="tag-content">Cleanliness</p>
              <div className="stars-group">
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
              </div>
            </div>
            <div className="tag">
              <p className="tag-content">Communication</p>
              <div className="stars-group">
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
              </div>
            </div>
          </div>
          {
            comments.map((item, index) => Comment(item.imgURL, item.userName, item.dateReview, item.comment, index))
          }

          <div className="post-comment-btn" onMouseUp={() => { setLayerSection('review') }}>
            <p className="post-rating">Post rating</p>
          </div>
        </div>
        )
      case 'Location':
        return (
          <div style={{ marginTop: 20 }}>
            <SimpleMap />
          </div>
        )
      case 'Rules':
        return (
          <div style={{ marginTop: 30, paddingLeft: 5 }}>
            {
              rules.map((item, index) => {
                return (
                  <div className="rule-container" key={index}>
                    <div className="index-container">
                      <p className="index">{index + 1}</p>
                    </div>
                    <p className="rule-content">{item}</p>
                  </div>
                );
              })
            }
          </div>
        )
      case 'Host':
        return (
          <div className="host-details-container">
            <div className="host-basic-container">
              <div className="host-img-container">
                <div className="host-img"></div>
              </div>

              <div className="host-badges">
                {
                  badges.map((item, index) => (
                    <div className="host-badge-container" key={index}>
                      <img src={require(`${item.icon}`).default} className="badge-icon" />
                      <p className="content">{item.badgeContent}</p>
                    </div>
                  ))
                }
              </div>
              <div className="host-provided">
                <p className="title">Tommy provided</p>
                <div className="provided-items-container">
                  <div className="item-container">
                    <FaRegCheckCircle className="check-icon" />
                    <p className="content">Government ID</p>
                  </div>
                  <div className="item-container">
                    <FaRegCheckCircle className="check-icon" />
                    <p className="content">Email address</p>
                  </div>
                  <div className="item-container">
                    <FaRegCheckCircle className="check-icon" />
                    <p className="content">Phone number</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="host-description">
              <h1 className="greeting">&nbsp;&nbsp;Hey, I'm Tommy!</h1>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vung Tau, Viet Nam &#8226; Member since June 2010</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi Guests,<br /></p>
              <p>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you for considering staying with me during your visit to Vung Tau. Whether you're coming for business, pleasure, or to visit  family, I think you will enjoy my rooms and my neighborhood.<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  I've been here in Vung Tau since 2000, and I can help you figure out what to do and how to get around. I've travelled quite a bit and enjoy having the world come to me!
                Here are all of my listing:<br />
                <br />
              </p>
              <p>Home with nice garden:</p> <p className="link"> https://www.airbnb.com/rooms/1234<br /></p>
              <p>Home with no garden:  </p><p className="link"> https://www.airbnb.com/rooms/4321<br /></p>
              <p>Home with nothing inside:</p><p className="link"> https://www.airbnb.com/rooms/4567<br /></p>

              <div className="report-btn">
                <FaRegFlag className="flag-icon" />
                <p>Report this user</p>
              </div>

            </div>
          </div>
        )
      default:
        return (
          <p>Default</p>
        )
    }
  }

  return (<>
    <nav style={{ height: "80px", background: "white", flex: 1, alignItems: 'center' }} className="nav navbar navbar-expand-md navbar-light sticky-top">
      <img style={{ width: 130, height: 40, marginTop: 20, marginLeft: 100 }} src={require('./logo.png').default}></img>
    </nav>

    <div className="container">

      <div className="slide-image">
        <Carousel />
      </div>

      <div className="room-details-book">

        <div className="room-details">
          <div className="title-container">
            {Title('Details')}
            {Title('Reviews')}
            {Title('Location')}
            {Title('Rules')}
            {Title('Host')}
          </div>
          <div className="title-section">
            <TitleSectionContent />
          </div>
        </div>

        <div className="book-section">
          <div className="book-form">
            <div className="price-roomrating-container">
              <div className="price-priceunit-container">
                <p className="price">$125 USD</p>
                <p className="price-unit">per night</p>
              </div>
              <div className="rating-container">
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />
                <HiStar className="react-icons-star" />

                <p className="rating-quantity">98</p>
              </div>
            </div>

            <p className="dates-title">Dates</p>
            <div className="checkin-checkout-container">
              <div className="temp-flex-box">
                {DateDisplay(checkinDate, 'Check In')}
              </div>
              <FiArrowRight className="react-icons-arrow-right" />
              <div className="temp-flex-box">
                {DateDisplay(checkinDate, 'Check Out')}
              </div>
            </div>

            {/* <DateRangePicker
              startDate={checkinDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={checkoutDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => { setCheckInDate(startDate); setCheckOutDate(endDate) }} // PropTypes.func.isRequired,
              focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
            /> */}

            <p className="dates-title">Guests</p>
            <div className="guests-quantity-picker-container" onMouseDown={() => { set_QuantityDropDown(!isQuantityDropDownOpened) }}>
              <p className="guests-quantity">{GuestDisplay(guestQuantity)}</p>
              <div className="arrow-down-icon-container">
                <FiChevronDown className="react-icons-arrow-down" />
              </div>
            </div>

            {/* <div class="quantity-dropdown-wrapper">{isQuantityDropDownOpened && <QuantityDropDown />}</div> */}
            <OutsideAlerter />

            <div className="book-btn" onClick={() => { setLayerSection('payment') }}><p className="book-btn-content">Book</p></div>
            <div className="book-description-container">
              <p className="description">You won't be charged yet</p>
              <p className="or">OR</p>
            </div>
            <div className="save-btn-container">
              {
                isSaved ? <div className="saved-btn" onMouseUp={() => { setIsSaved(!isSaved) }}><FaHeart className="heart-icon" /><p className="save-btn-content">Saved</p></div> :
                  <div className="save-btn" onMouseUp={() => { setIsSaved(!isSaved) }}><FaRegHeart className="heart-icon" /><p className="save-btn-content">Save to wish list</p></div>
              }
            </div>
          </div>
        </div>

      </div>

    </div>


    {
      LayerRouter(layerSection)
    }
    {/* { && <div className="overlay-layer"><RatingForm props={()=>setLayerDisplayed(false)}/></div>} */}
  </>
  );
}

export default App;
