import React, { useState } from 'react'
import './RoomDetails.css';
import Carousel from './Image-Slider';

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

function RoomDetails() {
  const [chosenTitle, set_chosenTitle] = useState('Details');

  const Title = (title) => {
    if (title === chosenTitle)
      return (
        <div className="container-title--active">
          <p className="title title--active" onClick={() => { set_chosenTitle(title) }}>{title}</p>
        </div>
      )
    else
      return (
        <div>
          <p className="title title--inactive" onClick={() => { set_chosenTitle(title) }}>{title}</p>
        </div>
      )
  }

  const TitleSectionContent = () => {
    switch (chosenTitle) {
      case 'Details':
        return (<>
          <h1 className="room-title">Luxury department from the beach</h1>
          <div className="category-container">
            <h2 className="category-type">Entire apartment</h2>
            <p style={{ fontSize: 12, marginLeft: 5, marginRight: 5, color: '#808080' }}>•</p>
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
            <div className="host-profile-img"></div>
            <div className="host-name-reviews-container">
              <div className="host-name-contactbutton">
                <h4>Room owner name</h4>
                <h4>Contact</h4>
              </div>
              <div className="host-reviews-verified">
                <h5>95 Reviews</h5>
                <h5>Verifed</h5>
              </div>
            </div>
          </div>
        </>)
      case 'Reviews':
        return (
          <p>{chosenTitle}</p>
        )
      case 'Location':
        return (
          <p>{chosenTitle}</p>
        )
      case 'Rules':
        return (
          <p>{chosenTitle}</p>
        )
      case 'Host':
        return (
          <p>{chosenTitle}</p>
        )
      default:
        return (
          <p>Default</p>
        )
    }
  }

  return (
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
        </div>

      </div>

    </div>
  );
}

export default RoomDetails;
