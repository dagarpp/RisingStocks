import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <div className="container">
        <nav id="menu" class="navbar navbar-expand-md navbar-light navbar-fixed-top">      
          <div className="navbar-header">
            {/* <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only"> 
              </span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button> */}
            
            <a className="navbar-brand" href="#page-top">
              Rising Stocks
            </a>{" "}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li class="nav-item">
                <a href="#features" class="nav-link">
                  Features
                </a>
              </li>
              {/* <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>*/}
              <li class="nav-item"> 
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              {/*<li>
                <a href="#portfolio" className="page-scroll">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>        
        </nav>
      </div>
    );
  }
}

export default Navigation;
