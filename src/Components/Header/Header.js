import React from "react";
import "./Header.css";
import Products from "./Products";
import Logo from '../Media/TRIM-white.png'
import Bread_Icon from '../Media/pngkey.com-beard-png-22689.png';
import Header_img_1 from '../Media/header.jpg'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
      <div class="header-img"></div>
        <div className="header-content">
          <img className='logo-main' src= {Logo} alt=""/>
          <h2 className="cover-h2">
            For All Ocassions Hairstyle is a must Try Fasion
          </h2>
          {/* <p className="cover-p">
            Lorem nisi incididunt ea cupidatat cupidatat id anim esse qui et.
          </p> */}
          <Link to="/services">
            <div className='button-1'>
            <button className="appoint-button" type="button">
              Book Now
            </button>
            </div>
          </Link>
        </div>
        <div className='quotes'>
          <img className='beard-icon' src={Bread_Icon} alt="Beard Icon"/>
          <div className='qoute-1'>
            {/* <h1 className='qoute-symbol'>"</h1> */}
            <h2 className='qoute'>We seem to believe it is possible to ward of death by following rules of good grooming.</h2><br/>
            <h3>-Don DeLillo</h3>
            <div className='qoute-line'></div>
          </div>
        </div>
        <div className="products-box">
          <Products />
        </div>
        <div className='header-cover-1'>
          <img className='header-img-1' src={Header_img_1} alt="Header 1"/>
          <Link to="/services">
            <button id='button-2' className="appoint-button" type="button">
              Book Now
            </button>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Header;
