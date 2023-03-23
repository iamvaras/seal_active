import React from 'react'
import { images } from '../../constants'
import data from '../../constants/data'
import './hotmelt.css'


const HotMeltCard = ({hotmelts : {imgUrl , title}}) => (
    <div className="app__hotmelt_img-container">
        <img src={imgUrl} alt="" />
        <p>{title}</p>
    </div>
)

const HotMelt = () => {
  return (
    <div className="app__hotmelt">
        <div className="app__hotmelt_subheading">
            <h2>Where To Use</h2>
            <img src={images.subheading} alt="" />
        </div>
        <div className="app__heading">Hot Melt Adhesive Solutions</div>
        <div className="app__hotmelt_img">
            {
                data.hotmelt.map((hotmelts) => <HotMeltCard hotmelts={hotmelts} key={hotmelts.title}/>)
            }
        </div>
    </div>
  )
}

export default HotMelt