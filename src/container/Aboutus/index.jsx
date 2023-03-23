import React from 'react'
import './about.css'
import { Button, SubHeading } from '../../components'
import { images } from '../../constants'

const Aboutus = () => {
  return (
    <div className="app__about app__bg section__padding app__wrapper" id='about'>
      <SubHeading text='Who we are'/>
      <div className="app__wrapper">
        <div className="app__wrapper_img">
          <img src={images.about} alt="" />
        </div>
        <div className="app__wrapper_info app__wrapper_info-content">
          {/* <div className="app__heading">About Us</div> */}
          <div className="app__heading ">Nice To Meet You</div>
          <div className="app__subheading">About Us</div>
          <div className="app__para">SealActive is the brand build on the core value 'Customer first'. We are the experienced team in Hot Melt systems and adhesives. We worked with various Hot Melt OEM’s and adhesive companies. So, our team have a rare combination of experience in handling Hot Melt systems and adhesives both. It is a very convenient and efficient to depend on one company for both hot melt machines and adhesive as we are experts on both the technologies.</div>
          <div className="app__subheading">Maintenance</div>
          <div className="app__para">Our Strong Technical background Help to maintain HM system.</div>
          <div className="app__subheading">Support</div>
          <div className="app__para">Our Technical team are 24/7 available to support your applications.</div>
          <div className="app__subheading">Products</div>
          <div className="app__para" style={{marginBottom:'-5px'}}>Our products used for packaging, meet FDA regulations for indirect food contact. Ensuring the safety of your clientele.</div>
          <div className="app__about_buttons">
            <Button url='#contact' text='Contact Us'/>
            <Button url='#products' text='View Products'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus