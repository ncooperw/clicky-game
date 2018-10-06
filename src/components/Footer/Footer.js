//sets up the reusable Footer component
import React from "react";
import "./Footer.css";

const Footer = () => ( 
    <footer className = "footer shadow1" >
    <div className="d-flex flex-column mb-3 justify-content-center content">
        <div className="row justify-content-center">
            <img className = "logo px-2" src = "/favicon.ico"
    alt = "Nicole Cooper-White | Designer, Full-Stack Developer &amp; Creator"
    height = "48" />
    <h4 className="align-self-center"> Clean, simple, beautiful </h4> 
        </div>
          <div className = "row justify-content-center"> 
          <p className="copyright">Handcrafted by Nicole Cooper - White </p>
          <span className = "icon px-2"> < i className = "far fa-copyright" > </i></span> twentyeighteen 
          </div>  
    
    </div>
    
    </footer>

);

export default Footer;