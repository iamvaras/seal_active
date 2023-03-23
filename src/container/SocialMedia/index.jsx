import React from 'react'
import './socialmedia.css'
import {FaFacebookF , FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__socialmedia ">
        <div className="app__subheading">
            Visit Our Social Networks to latest updates on products
        </div>
        <div className="app__socialmedia_icons">
          <a href="https://www.facebook.com/profile.php?id=100084300851295&ref=pages_you_manage" target='_blank'><FaFacebookF style={{color:'var(--color-white)'}} size={27}/></a>
          <a href="https://www.linkedin.com/in/sealactive-pvt-ltd-477287244" target='_blank'><FaLinkedinIn style={{color:'var(--color-white)'}} size={27}/></a>
          <a href="https://www.instagram.com" target='_blank'><FaInstagram style={{color:'var(--color-white)'}} size={27}/></a>
        </div>
    </div>
  )
}

export default SocialMedia