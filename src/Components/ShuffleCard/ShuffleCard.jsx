import React from "react";
import './ShuffleCard.css';
import LongImg1 from '../../Assets/hero_1.png';

function ShuffleCard({headingText, imgSrc, reverseRow}){
    const compData = {
        headingText : headingText || 'Family Room',
        imgSrc : imgSrc || LongImg1
    };
    return (
    <div className="card mb-3 main-card-container top-container">
        <div className={`row row-custom-display g-0 videocard-container ${reverseRow ? 'flex-md-row-reverse flex-lg-row-reverse' : ''}`}>
            <div className="col-md-6 videocard-img-container image-cont">
                <img src={compData.imgSrc} className="img-fluid long-img" alt="..."/>
            </div>
            <div className="col-md-6 videocard-text-container text-cont">
                <div className="card-body">
                    <h2 className="card-title video-heading-specific">{compData.headingText}</h2>
                    <p className="card-text video-para-width">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.<br/><br/>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <button className="card-text button-specific"> LEARN MORE</button>
                </div>
            </div>
        </div>
    </div>

    );
};

export default ShuffleCard;