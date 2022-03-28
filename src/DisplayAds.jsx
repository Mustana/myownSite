
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './Style.css';
import BannerData from "./BannerData";
import CardsBanners from "./CardsBanners";




const DisplayAds = () => {
    return (
    <>
    {
        BannerData.map((val, ind) => { 
        return <CardsBanners key={ind} imgsrc={val.imggsrc} tittle={val.tittle} subtittle={val.subtittled}  url={val.url} />
        })
    }
    </>
    );
}
  
export default DisplayAds;





