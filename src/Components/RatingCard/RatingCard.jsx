import React from "react";
import './RatingCard.css';

function RatingCard(){
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    };
    
    const compData = [{
        image: "https://preview.colorlib.com/theme/hepta/images/img_1.jpg.webp",
        heading1Text: "Food & Wines",
        paraText: "3,239 reviews",
        ratingIcons: (
            <>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
            </>
        ),
    },
    {
        image: "https://preview.colorlib.com/theme/hepta/images/img_2.jpg.webp",
        heading1Text: "Resort & Spa",
        paraText: "4,921 reviews",
        ratingIcons: (
            <>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
            </>
        ),
    },
    {
        image: "https://preview.colorlib.com/theme/hepta/images/img_3.jpg.webp",
        heading1Text: "Hotel Rooms",
        paraText: "2,112 reviews",
        ratingIcons: (
            <>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
            </>
        ),
    },
    {
        image: "https://preview.colorlib.com/theme/hepta/images/img_5.jpg.webp",
        heading1Text: "Mountain Climbing",
        paraText: "6,421 reviews",
        ratingIcons: (
            <>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
            </>
        ),
    }];

    return (
        <div className="cont-rating">
            {compData.map((item, index) => (
                <div key={index} className="card card-main sub-cont-rating">
                    <img src={item.image} className="rating-image" alt={item.heading1Text} />
                    <div className="rating-card-body">
                        <h6 className="rating-card-heading" onClick={scrollToTop}>{item.heading1Text}</h6>
                        <div className="rating-icon">
                            <span className="card-icon">{item.ratingIcons}</span>
                            <p className="card-para">{item.paraText}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default RatingCard;