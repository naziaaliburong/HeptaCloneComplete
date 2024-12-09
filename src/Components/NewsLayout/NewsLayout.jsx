import React, { useState } from "react";
import './NewsLayout.css';
import ImageCard from "../ImageCard/ImageCard";
import AsymmetricImageCard from "../AsymmetricImageCard/AsymmetricImageCard";

function NewsLayout(){
    const [color1, setColor1] = useState("transparent");
    const [color2, setColor2] = useState("transparent");
    const [color3, setColor3] = useState("transparent");
    function handleBtn1Click() {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
        setColor1("rgba(101, 192, 186, 0.3)");
        setColor2("transparent");
        setColor3("transparent");
    };
    function handleBtn2Click() {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
        setColor2("rgba(101, 192, 186, 0.3)");
        setColor1("transparent");
        setColor3("transparent");
    };
    function handleBtn3Click() {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
        setColor3("rgba(101, 192, 186, 0.3)");
        setColor1("transparent");
        setColor2("transparent");
    };
    return ( 
        <div id="news-grid-container">
            <div className="column-1">
                <ImageCard para="hidden" heading1Text="February 26, 2018" heading2Text="Free Template by Colorlib" />
                <ImageCard para="hidden" heading1Text="February 26, 2018" heading2Text="Free Template by Colorlib" image="https://preview.colorlib.com/theme/hepta/images/img_2.jpg.webp"/>
                <ImageCard para="hidden" heading1Text="February 26, 2018" heading2Text="Free Template by Colorlib" />
                <ImageCard para="hidden" heading1Text="February 26, 2018" heading2Text="Free Template by Colorlib" image="https://preview.colorlib.com/theme/hepta/images/img_2.jpg.webp"/>
                <ImageCard para="hidden" heading1Text="February 26, 2018" heading2Text="Free Template by Colorlib" />
                <ImageCard para="hidden" heading1Text="February 26, 2018" heading2Text="Free Template by Colorlib" image="https://preview.colorlib.com/theme/hepta/images/img_2.jpg.webp"/>
                <div>
                    <button className="asymm-btn asymm-btn1" onClick={handleBtn1Click} style={{border:`3px solid ${color1}`}}>1</button>
                    <button className="asymm-btn asymm-btn2" onClick={handleBtn2Click} style={{border:`3px solid ${color2}`}}>2</button>
                    <button className="asymm-btn asymm-btn3" onClick={handleBtn3Click} style={{border:`3px solid ${color3}`}}>3</button>
                </div>
            </div>
            <div className="column-2">
            <div className="column2-row1">
                <input type="text" placeholder="&#128269; Search..."/>
            </div>
            <div className="column2-row2">
                <h2>Popular post</h2>
                <AsymmetricImageCard />
                <AsymmetricImageCard />
                <AsymmetricImageCard />
                <AsymmetricImageCard />
                <AsymmetricImageCard />
            </div>
            <div className="column2-row3">
                <h2>Categories</h2>
                <ul className="asymm-ul">
                    <div className="asymm-display">
                        <li>Events</li>
                        <span>(12)</span>
                    </div>
                    <div className="asymm-display">
                        <li>Resto bar</li>
                        <span>(4)</span>
                    </div>
                    <div className="asymm-display">
                        <li>Celebrations</li>
                        <span>(23)</span>
                    </div>
                    <div className="asymm-display">
                        <li>Promos</li>
                        <span>(8)</span>
                    </div>
                </ul>
            </div>
            </div>
        </div>
);
};
export default NewsLayout;