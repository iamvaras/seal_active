import React from 'react'
import './homepage.css'

import { Button , SubHeading } from '../../components'
import {images} from '../../constants'

const Homepage = () => {
  return (
    <div className="app__homepage app__wrapper section__padding" id='home'>
      <div className="app__wrapper_info">
        <SubHeading text='welcome to Seal-Active' />
        <div className="app__heading">
          Mahesh we stick, <br /> we never let go
        </div>
        <div className="app__para">
          SealActive is the brand build on the core value 'Customer First'. We are experienced team in Holt Melt Syatems and Adhesives. We worked with various Hot Melt OEM’s and adhesive companies. So, our team have a rare combination of experience in handling Hot Melt systems and adhesives both.
        </div>

        <div className="app__buttons">
          <Button url='#products' text='View Products'/>
        </div>

      </div>
      <div className="app__wrapper_img">
        <img src={images.homepage} alt="" />
      </div>
    </div>
  )
}

export default Homepage