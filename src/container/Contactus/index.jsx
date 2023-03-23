import React from 'react'
import { Button, SubHeading } from '../../components'
import { MdPhoneIphone, MdMail, MdLocationPin } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

import './contact.css'

const Contact = () => {
    return (
        <div className="app__contactus app__bg" id='contact'>
            <div className="app__contactus_address section__padding">
                <div className="app__contactus_address-left">
                    <SubHeading text='Who We Are' />
                    <div className="app__heading">Get In Touch With Us</div>
                    <div className="app__para">If you have a Question or Comment you would like to discuss, Please get in touch with us. <br /> We did love to hear from you?</div>
                    <div className="app__contactus_address-icon">
                        <MdPhoneIphone size={27} style={{ color: 'var(--color-textOne', marginRight: '10px' }} />
                        <div className="app__para">+91-9611589138</div>
                    </div>
                    <div className="app__contactus_address-icon">
                        <MdMail size={27} style={{ color: 'var(--color-textOne', marginRight: '10px' }} />
                        <div className="app__para">sales@sealactive.in</div>
                    </div>
                    <div className="app__contactus_address-icon">
                        <MdLocationPin size={27} style={{ color: 'var(--color-textOne', marginRight: '10px' }} />
                        <div className="app__para">#10, Balaji Layout, Mallathahalli, Nagarbhavi, Benglore, 560056</div>
                    </div>
                </div>
                <div className="app__conatctus_address-right">
                    <form action="https://formspree.io/f/xaykrrpp" method='POST' className='app__conatctus_address-right_form'>
                        <div className="app__heading">Say Something</div>
                        <input type="text" className='app__conatctus_address-right_form_item' placeholder='Enter Your Name' name='Name' />
                        <input type="email" placeholder='Enter Your Email Address' name='Email'/>
                        <textarea rows='3' placeholder='Enter Your Message' name='Message'></textarea>
                        <Button text="Submit" />
                    </form>
                </div>
            </div>

            {/* Footer  */}


            <div className="app__contactus_footer section__padding">
                <div className="app__subheading" style={{ fontSize: '37px', margin: '10px 0' }}>SealActive Pvt Ltd.</div>
                <div className="app__para">SealActive is the brand build on the core value 'Customer first'. <br /> We are the experienced team in Hot Melt systems and adhesives</div>
                <div className="app__contactus_footer-content">
                    <div className="app__contactus_footer-content_item" >
                        <div className="app__subheading">Discover Us</div>
                        <div className="app__para"><a href="#home">Home</a></div>
                        <div className="app__para"><a href="#about">About Us</a></div>
                        <div className="app__para"><a href="#gallery">Gallery</a></div>
                        <div className="app__para"><a href="#contact">Contact Us</a></div>
                    </div>
                    <div className="app__contactus_footer-content_item" >
                        <div className="app__subheading">Our Products</div>
                        <div className="app__para"><a href="#products">SA Hygine 112</a></div>
                        <div className="app__para"><a href="#products">SA Mat 212</a></div>
                        <div className="app__para"><a href="#products">SA Pak 312</a></div>
                    </div>
                    <div className="app__contactus_footer-content_item" >
                        <div className="app__subheading">Contact Us</div>
                        <div className="app__para"><a href=""><MdPhoneIphone />  +91-9611589138</a></div>
                        <div className="app__para"><a href=""><MdMail /> sales@sealactive.in</a></div>
                        <div className="app__para"><a href=""><MdLocationPin /> Benglore, 560056</a></div>
                    </div>
                </div>
                <hr style={{ maxWidth: '50%', margin: '1rem auto' }} />
                <div className="app__contactus_footer-icons">
                    <a href="https://www.facebook.com/profile.php?id=100084300851295&ref=pages_you_manage" target='_blank'><FaFacebookF style={{ color: 'var(--color-white)' }} size={27} /></a>
                    <a href="https://www.linkedin.com/in/sealactive-pvt-ltd-477287244" target='_blank'><FaLinkedinIn style={{ color: 'var(--color-white)' }} size={27} /></a>
                    <a href="https://www.instagram.com" target='_blank'><FaInstagram style={{ color: 'var(--color-white)' }} size={27} /></a>
                </div>
                <div className="app__allrights">
                    <p>Copyright &#169; 2022 SealActive. All Rights Reserved | <br style={{ display: 'none' }} /> Designed & Developed by <b>iamvaras</b></p>
                </div>
            </div>
        </div>
    )
}

export default Contact