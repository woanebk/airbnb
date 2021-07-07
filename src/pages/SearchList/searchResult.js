import React from 'react';
import './searchResult.css';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className='searchResult'>
            <img className="img_search" src={img} alt="" />
            <i style={{fontSize:"30px", color:"#ff385c"}} className="far fa-heart searchResult__heart"></i>

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p style={{fontSize:"22px"}}>{location}</p>
                    <h3>{title}</h3>
                    <p style={{fontSize:"16px", marginTop:"-15px"}}>____</p>
                    <p style={{fontSize:"16px", marginTop:"-10px"}}>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                    <i style={{color:"#FF8C00", marginBottom:"20px", fontSize:"24px"}} className="far fa-star searchResult__star"></i>
                   
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2 style={{ marginRight:"30px",  marginBottom:"15px"}}>{price}</h2>
                        <p style={{ marginRight:"30px" }}>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult