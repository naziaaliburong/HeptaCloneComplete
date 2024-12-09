import React from "react";
import './IconColumns.css';

function IconColumns({backgroundColor}){
    return (
    <div className="px-4 py-5 pt-0 icon-col-container" id="featured-3" style={{backgroundColor: backgroundColor}}>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 icon-sub-container">
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <img src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/001-breakfast.svg" alt="breakfast icon" className="icon-column"  style={{backgroundColor: backgroundColor}}/>
                </div>
                <h3 className="fs-2 text-body-emphasis icon-heading">Good Foods</h3>
                <p className="icon-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <img src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/002-planet-earth.svg" alt="breakfast icon" className="icon-column"  style={{backgroundColor: backgroundColor}}/>
                </div>
                <h3 className="fs-2 text-body-emphasis icon-heading">Travel Anywhere</h3>
                <p className="icon-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <img src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/003-airplane.svg" alt="breakfast icon" className="icon-column"  style={{backgroundColor: backgroundColor}}/>
                </div>
                <h3 className="fs-2 text-body-emphasis icon-heading">Airplane</h3>
                <p className="icon-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <img src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/004-beach.svg" alt="breakfast icon" className="icon-column"  style={{backgroundColor: backgroundColor}}/>
                </div>
                <h3 className="fs-2 text-body-emphasis icon-heading">Beach Resort</h3>
                <p className="icon-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <img src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/005-mountains.svg" alt="breakfast icon" className="icon-column"  style={{backgroundColor: backgroundColor}}/>
                </div>
                <h3 className="fs-2 text-body-emphasis icon-heading">Mountain Climbing</h3>
                <p className="icon-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <img src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/006-hot-air-balloon.svg" alt="breakfast icon" className="icon-column"  style={{backgroundColor: backgroundColor}}/>
                </div>
                <h3 className="fs-2 text-body-emphasis icon-heading">Hot Air Balloon</h3>
                <p className="icon-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
        </div>
    </div>
      
    );
};

export default IconColumns; 