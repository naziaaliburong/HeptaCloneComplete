import React from "react";
import './HeroCentered.css';

function HeroCentered({headingText, backgroundColor, changePara}){
    return (
      <div className="px-4 py-5 pb-0 my-5 text-center hero-centered" style={{backgroundColor: backgroundColor}}>
        <h1 className="display-5 fw-bold text-body-emphasis">{headingText || "Experience Once In Your Life Time"}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 hero-para-style">{changePara ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed." : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."}</p>
        </div>
      </div>
    );
};

export default HeroCentered; 