
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import FrontendData from "./FrontendData";
import CardsFront from "./CardsFront";
import './Style.css';



const Frontend = () => {
    return (
    <>
       
<div className="container" >
        <div>
         <h2 className="section-heading subheaderText"></h2>
         <div className="col-lg-12 mx-auto text-center default-margin-top">
             <p className="large text-muted">
             This is at the core of my skills, where I’ve developed web games, built responsive emailers and <br/>reusable, integrated, cross-browser templates, and implemented Google Analytics and Tag Manager.

                </p></div>
        </div>
        </div>
    {
         FrontendData.map((val, ind) => { 
            return <CardsFront key={ind} imgsrc={val.imggsrc} tittle={val.tittle} subtittle={val.subtittled}  url={val.url} />
          })

    }
    </>
    );
}
  
export default Frontend;





