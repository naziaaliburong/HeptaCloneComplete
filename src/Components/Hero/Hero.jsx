import React from "react";
import './Hero.css';

function Hero({heroHeading, displayHeroBtn}){
    const HeroData = {
        heroHeading: heroHeading || "Travel & Tours",
        displayHeroBtn : displayHeroBtn || "true",
    };
    return (
    <div className="px-4 py-5 my-5 pt-0 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis main-heading">{HeroData.heroHeading}</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 main-para">A free template by <a href="/" className="main-anchor">Colorlib</a>. Download and share!</p>
            {HeroData.displayHeroBtn==="true" && (
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a href="/"><button type="button" className="btn btn-primary btn-lg px-4 gap-3 main-btn">VISIT COLORLIB</button></a>
            </div>
            )}
            
        </div>
    </div> 
    );
};

export default Hero;