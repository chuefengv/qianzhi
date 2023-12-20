'use client'

import React from 'react'
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div className='footer-component'>
      <div className='reach-out'>
        <p>REACH OUT</p>
        <p>NEW YORK CITY</p>
      </div>
      <div className='contact-links'>
        <a href='/'>
          <Icon icon="il:instagram" className='contact-icons'/>
        </a>
        <a href='/'>
          <Icon icon="ic:outline-email" className='contact-icons'/>
        </a>
      </div>
    </div>
  )
}
