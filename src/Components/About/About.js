import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="nav-box">
        <h1 className="nav-box-text">About Us</h1>
      </div>
      <div className="barbers">
        <div className='barber-1'>
          <img
              className="barber-img"
              src={require("./barber-1.png")}
              alt="Barber 1"
            ></img>
            <div className='barber-info'>
              <h2 className="barber-name">Alex Parker</h2>
              <p className="barber-details">
                  Velit quis ipsum esse incididunt aliqua irure incididunt voluptate
                  mollit mollit minim ad. Labore ex laboris incididunt ex ut duis
                  officia do adipisicing ullamco quis pariatur id.
              </p>
            </div>
        </div>
          <div className='barber-2'>
            <img
              className="barber-img"
              src={require("./barber-2.png")}
              alt="Barber 2"
            ></img>
            <div className='barber-info'>
              <h2 className="barber-name">Peter Harrison</h2>
              <p className="barber-details">
                  Id et excepteur laborum velit esse ad excepteur officia labore.
                  Incididunt do sit voluptate proident irure incididunt cupidatat non
                  irure mollit esse cupidatat.
                </p>
            </div>
          </div>
      </div>
      <div id='about-qoute-line' className='qoute-line'></div>

      <div className="company-history">
        <h2 className="company-history-h2">Our History</h2>
        <p className="company-history-p">
          Consequat eu voluptate nisi officia non aliqua. Sint et irure enim
          esse exercitation mollit ullamco. Voluptate anim proident eiusmod
          minim magna ut deserunt irure occaecat id veniam duis excepteur.
        </p>
      </div>


      <div className="about-gallery">
        <div className="row">
          <div className="column">
            <img
              className="about-img"
              src={require("./About-1.jpg")}
              alt="Not Fount"
            ></img>
            <img
              className="about-img"
              src={require("./About-2.jpg")}
              alt="Not Fount"
            ></img>
          </div>
          <div className="column">
            <img
              className="about-img"
              src={require("./About-3.jpg")}
              alt="Not Fount"
            ></img>
          </div>
          <div className="column">
            <img
              className="about-img"
              src={require("./About-4.jpg")}
              alt="Not Fount"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
