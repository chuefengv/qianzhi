'use client'
import React from 'react'
import "../../app/globals.css"
import { btsimages } from '../btsimages'

export default function equipment() {

  return (
    <div className='equipment'>

      <div className='image-container'>
        <img src={btsimages[9].url} alt='Image of Tsyen adjusting a steadicam' />
      </div>

      <section className='text-container'>
        <p>Qianzhi (Tsyen) Shen, is a steadicam and camera operator based in New York City. Born and raised in Beijing, she is bilingual with a decade plus of camera experience.</p>
        <h3>Gear:</h3>
        <ul>
          <li>MK-V Nexus Sled</li>
          <li>Master Series Vest</li>
          <li>NB Stabalizer Arm</li>
          <li>SmallHD 703 Monitor</li>
          <li>Modern 1 Riser Steadicam Stand with Wheels</li>
          <li>Anton Bauer Batteries</li>
          <li>Rock and Roller Cart</li>
        </ul>
      </section>

      <div className='image-container'>
        <img src={btsimages[11].url} alt='Black and white image of Tsyen operating a steadicam'/>
      </div>

      <div className='image-container'>
        <img src={btsimages[8].url} alt='Tsyen giving a thumbs up on the set of a shoot' />
      </div>
    </div>
  )
}
