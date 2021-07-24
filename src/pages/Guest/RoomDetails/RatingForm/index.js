import React, { useState } from 'react'
import './ratingform.css'
import { HiStar } from "react-icons/hi";
export default function ({props}) {
    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('')
    return (
        <div className="rating-form-container">
            <div className="room-basic-info-rating-point-container">
                <div className="room-image"></div>
                <div className="basic-info-container">
                    <p className="title">Luxury department from the beach</p>
                    <p className="location">123 OnDaBeach St &#8226; Vung Tau</p>
                    <p className="location">June 2 2021 - June 10 2021</p>
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
                    <div className="tag">
                        <p className="tag-content">Convenient</p>
                        <div className="stars-group">
                            <HiStar className="react-icons-star" />
                            <HiStar className="react-icons-star" />
                            <HiStar className="react-icons-star" />
                            <HiStar className="react-icons-star" />
                            <HiStar className="react-icons-star" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="reviews-container">
                <div className="title-container">
                    <p className="review-title">Describe your experience</p>
                    <p>(required)</p>
                </div>
                <p>Your review will be public on hosts profiles.</p>
                <textarea className="input" value={input} onChange={(event)=>setInput(event.target.value)} maxLength={500}/>
                <p className="remaining-word">{500-input.length} characters left</p>
                <p className="review-title">Private guest feedback</p>
                <p>This feedback is just for your hosts. We won't make it public.</p>
                <textarea className="input" value={input2} onChange={(event)=>setInput2(event.target.value)} maxLength={500}/>
                <p className="remaining-word">{500-input2.length} characters left</p>
                <div className="post-review-btn" onMouseUp={()=>{ props() }}>
                    <p>Post review</p>
                </div>
            </div>
        </div>
    );
}