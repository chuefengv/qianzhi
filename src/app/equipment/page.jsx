'use client'
import React from 'react'
import "../../app/globals.css"
import { btsimages } from '../btsimages'
import Image from 'next/image'

export default function equipment() {

  return (
    <div className='equipment'>

      <div className='image-container'>
        <img src={btsimages[7].url} alt='trets' />
      </div>

      <section className='text-container'>
        <h3>My Current Gear:</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tenetur accusantium nemo mollitia, unde consectetur, aliquam delectus cum voluptatum aut repudiandae. Illo tenetur reprehenderit magnam similique quis facilis eum sit.</p>
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

    </div>
  )
}
