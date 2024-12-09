import React from "react";
import './ImageCardLayout2.css';
import ImageCard from "../ImageCard/ImageCard";

function ImageCardLayout2(){
   
    return ( 
        <div className="grid-container layout-specific-styling">
            <ImageCard para="hidden" heading1Display="false" heading2Text="Five Reasons to Stay at Villa Resort" />
            <ImageCard para="hidden" heading1Display="false" heading2Text="Five Reasons to Stay at Villa Resort" image="https://preview.colorlib.com/theme/hepta/images/img_2.jpg.webp"/>
            <ImageCard className="large" para="hidden" heading1Display="false" heading2Text="Five Reasons to Stay at Villa Resort" image="https://preview.colorlib.com/theme/hepta/images/img_3.jpg.webp"/>
        </div>
);
};
export default ImageCardLayout2;