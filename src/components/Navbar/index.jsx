import React, { useState } from 'react'
import './navbar.css'
import images from '../../constants/images'
import {GiHamburgerMenu} from 'react-icons/gi'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import {RxCross1} from 'react-icons/rx'
import Button from '../Button'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="app__para"><a href="#home">Home</a></li>
        <li className="app__para"><a href="#products">Products</a></li>
        <li className="app__para"><a href="#about">About</a></li>
        <li className="app__para"><a href="#gallery">Gallery</a></li>
        <li className="app__para"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="https://www.facebook.com/profile.php?id=100084300851295&ref=pages_you_manage" target='_blank'><FaFacebookF style={{color:'var(--color-textOne)'}} size={18}/></a>
        <a href="https://www.linkedin.com/in/sealactive-pvt-ltd-477287244" target='_blank'><FaLinkedinIn style={{color:'var(--color-textOne)'}} size={20}/></a>
        <a href="https://www.instagram.com" target='_blank'><FaInstagram style={{color:'var(--color-textOne)'}} size={20}/></a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#4371C5" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <RxCross1 color='#4371C5' fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home"  onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#products" onClick={() => setToggleMenu(false)}>Products</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar