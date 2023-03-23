import React from 'react'
import './subheading.css'
import { images } from '../../constants'

const SubHeading = ({text}) => {
  return (
    <div className="app__subheading-container">
        <div className="app__subheading">{text}</div>
        <img src={images.subheading} alt="" />
    </div>
  )
}

export default SubHeading