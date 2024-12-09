import React from "react";
import './AsymmetricImageCard.css';

function AsymmetricImageCard({imageSrc}){
   
    return ( 
        <div className="asymm-card-cont">
            <div className="first-div">
                <img src={`${imageSrc ? imageSrc : "https://preview.colorlib.com/theme/hepta/images/img_1.jpg.webp"}`} alt="juice" className="asymm-img"/>
            </div>
            <div className="second-div">
                <h6 className="date-heading">February 26, 2018</h6>
                <h5 className="topic-heading">Free Template by Colorlib</h5>
            </div>
        </div>
        
    );
};
export default AsymmetricImageCard;