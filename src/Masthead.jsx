
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './Style.css';
import { ImMobile2 , ImMail } from "react-icons/im";


const Masthead = () => {
    return (
    <>
     <header className="masthead" id="Masthead">
        <div className="container">
            <div className="masthead-heading">Mustafa Kushalgadhwala</div>
            <div className="masthead-subheading">Creative Digital Developer</div>
        <div className="masthead-subheadingmore">Creative developer, animator and team leader with 15 years of experience, creating websites, games, web components, animations, social media content, rich media interactive banner ads, HTML5 banners and more. </div>
        <div><ImMobile2 color="white" fontSize="1.5em"/> : +971 50 352 9579 | <ImMail color="white" fontSize="1.5em"/> : mustu02@gmail.com</div>
        </div>
    </header>
    </>
    );
}


  
export default Masthead;





