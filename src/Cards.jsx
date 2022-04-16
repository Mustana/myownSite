import React, { useState, useCallback } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './Style.css';
import {Modal, Button} from 'react-bootstrap';
import ReactPlayer from 'react-player'


const Cards = (props) => {

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);


    return (
    <>




    <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
    >
    <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
        {props.tittle}
        </Modal.Title>
    </Modal.Header>
        <Modal.Body>
      <div className="header"> {props.tittle}</div>
        <ReactPlayer width='100%'
            height='100%' 
            className='img-fluid' playing={true}  controls url={props.videoSrc} />
        </Modal.Body>
    </Modal>   

  

    <div className="col-lg-4 col-md-4 sm-3" onClick={() => setLgShow(true)}>
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

    
    </>
);
}
  
export default Cards;







