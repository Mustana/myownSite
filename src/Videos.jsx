
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import VideoData from "./VideoData";
import Cards from "./Cards";
import './Style.css';



const Videos = () => {
    return (
    <>
       <div className="dropdown text-center">
        <button className="btn btn-secondary dropdown-toggle text-center default-fonts" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
       None
        </button>
        <ul className="dropdown-menu dropdown-menu-dark default-fonts" aria-labelledby="dropdownMenuButton2">
            <li><a className="dropdown-item active" href="#">Animation</a></li>
            <li><a className="dropdown-item" href="#">Social Media</a></li>
            <li><a className="dropdown-item" href="#">Editing</a></li>    
        </ul>
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





