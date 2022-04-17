
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './Style.css';
import BannerData from "./BannerData";
import CardsBanners from "./CardsBanners";




const DisplayAds = () => {
    return (
    <>

<div className="container" >
        <div>
         <h2 className="section-heading subheaderText"></h2>
         <div className="col-lg-12 mx-auto text-center default-margin-top">
             <p className="large text-muted">
             HTML5 is the go-to format and industry standard of today’s digital adverts. I strive to push its digital envelop to <br/>its technological limit with rich media and animations across multiple devices.

                </p></div>
        </div>
        </div>
    {
        BannerData.map((val, ind) => { 
        return <CardsBanners key={ind} imgsrc={val.imggsrc} tittle={val.tittle} subtittle={val.subtittled}  url={val.url} />
        })
    }
    </>
    );
}
  
export default DisplayAds;





