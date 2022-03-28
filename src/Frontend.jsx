
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import FrontendData from "./FrontendData";
import CardsFront from "./CardsFront";
import './Style.css';



const Frontend = () => {
    return (
    <>
         <div className="dropdown text-center">
        <button className="btn btn-secondary dropdown-toggle text-center default-fonts" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
       None
        </button>
        <ul className="dropdown-menu dropdown-menu-dark default-fonts" aria-labelledby="dropdownMenuButton2">
            <li><a className="dropdown-item active" href="#">Games</a></li>
            <li><a className="dropdown-item" href="#">Html Site</a></li>  
            <li><a className="dropdown-item" href="#">React Web Apps</a></li>  
        </ul>
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





