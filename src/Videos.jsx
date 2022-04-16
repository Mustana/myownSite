
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import VideoData from "./VideoData";
import Cards from "./Cards";
import './Style.css';



const Videos = () => {
    return (
    <>



 

    <div className="container" >
        <div>
         <h2 className="section-heading subheaderText"></h2>
         <div className="col-lg-12 mx-auto text-center default-margin-top">
             <p className="large text-muted">
             Alongside leading a team of developers and animators, I’ve managed and executed a wide range of 360 ad campaigns,<br/> creating animatics and editing videos for a variety of online and digital media.

                </p></div>
        </div>
    </div>
    {
         VideoData.map((val, ind) => { 
            return <Cards key={ind} imgsrc={val.imggsrc} tittle={val.tittle} subtittle={val.subtittled} videoSrc={val.videoSrc} />
          })

    }
   
    
    </>
    );
}
  
export default Videos;





