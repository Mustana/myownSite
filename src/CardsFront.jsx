
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './Style.css';
import Popup from 'reactjs-popup';




const CardsFront = (props) => {

    return (
    <>

  
   <Popup trigger={
      <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
            <div className="portfolio-hover"   >
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
            </div>
           
            <img className="img-fluid" src={props.imgsrc} alt={props.imgsrc} />
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{props.tittle}</div>
                    <div className="portfolio-caption-subheading">{props.subtittle}</div>
                </div>
              
            </div>
        </div>  
   } modal nested>
      
       {close => (

      <div>
         <div className="header"> {props.tittle}</div>
         <img className="img-fluid" src={props.imgsrc} alt={props.imgsrc} />
         <button type="button" className="buttonUrl text-center default-fonts"><a href={props.url} style={{textDecoration: "none"}} target="_blank">Launch Site</a></button>
          <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
       
</Popup>
       
        
    </>
);
}
  
export default CardsFront;







