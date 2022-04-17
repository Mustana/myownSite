
import React from "react";

import {HashLink as NavLink} from "react-router-hash-link";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './Style.css';


const Navigation = () => {

  
    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item">
                            <NavLink smooth className="nav-link"  to="myownSite/#Portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink smooth className="nav-link" to="myownSite/#Masthead">About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink smooth className="nav-link" to="myownSite/#Skills">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink smooth className="nav-link" to="myownSite/#Contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
    );
}


  
export default Navigation;





