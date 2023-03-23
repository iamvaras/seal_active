import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import './gallery.css'

const GalleryImages = [images.galleryZero, images.galleryOne, images.galleryTwo, images.galleryThree, images.galleryFour, images.galleryFive, images.gallerySix]

const Gallery = () => {

    const scrollRef = React.useRef(null)

    const scroll = (direction) => {
        const { current } = scrollRef;
    
        if (direction === 'left') {
          current.scrollLeft -= 400;
        } else {
          current.scrollLeft += 400;
        }
      };
    

  return (
    <div className="app__gallery flex__center" id='gallery'>
        {/* Gallery Content  */}
        <div className="app__gallery-content">
            <SubHeading text='Instagram'/>
            <div className="app__heading">Photo Gallery</div>
            <div className="app__para" style={{paddingBottom:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime odio expedita ut magni? Voluptatibus natus, delectus ratione quia suscipit inventore maxime officia, culpa blanditiis beatae voluptate et! Doloremque, molestiae quod!</div>
        </div>
        {/* Gallery Images  */}
        <div className="app__gallery-images">
            <div className="app__gallery-images_container" ref={scrollRef}>
            {
                GalleryImages.map( (image, index) => (
                    <div className="app__gallery-images_card flex__center" key={index}>
                        <img src={image} alt="" />
                        <BsInstagram className='app__gallery-images_icon'/>
                    </div>
                ))
            }
            </div>
            <div className="app__gallery-images_arrows">
                <BsArrowLeftShort className='gallery__arrow-icon' onClick={ ()=> scroll('left')} />
                <BsArrowRightShort className='gallery__arrow-icon' onClick={ () => scroll('right')}/>
            </div>
        </div>
    </div>
  )
}

export default Gallery