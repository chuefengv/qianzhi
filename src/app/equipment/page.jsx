'use client'
import React from 'react'
import "../../app/globals.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { btsimages } from '../btsimages';

export default function equipment() {

  return (
    <div>

      <Carousel >
        {btsimages.map(image=> <img src={image.url} alt='this sialt text'/>)}
      </Carousel>
      
    </div>
  )
}
