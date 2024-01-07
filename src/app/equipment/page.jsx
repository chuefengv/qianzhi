'use client'
import React from 'react'
import "../../app/globals.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { btsimages } from '../btsimages';

export default function equipment() {

  return (
    <div className='equipment'>
      <div className='carousel-container'>
        <Carousel emulateTouch={true} swipeable={true} infiniteLoop={true} showArrows={false} showThumbs={false}>
          {btsimages.map((image,index) => <img key={index} src={image.url} alt='this sialt text'/>)}
        </Carousel>
      </div>      
    </div>
  )
}
