import React from "react";
import './HeroCenteredLarge.css';

function HeroCenteredLarge({headingText, backgroundColor, color, paraText}){
  const compData={
    color: color || "rgb(108, 117, 125)",
    paraText: paraText || "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  }
    return (
      <div className="px-4 py-5 pb-0 my-5 text-center hero-centered-large" style={{backgroundColor:backgroundColor}}>
        <h1 className="display-5 fw-bold text-body-emphasis">{headingText || (<>International Tour <br/>Management.</>)}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 hero-para-style" style={{color:compData.color}}>{compData.paraText}</p>
        </div>
      </div>
    );
};

export default HeroCenteredLarge;