'use client'

import React from 'react'
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div className='footer-component'>
      <div className='reach-out'>
        <p>REACH OUT</p>
        <p>Qianzhi Shen</p>
        <p>NEW YORK CITY</p>
      </div>
      <div className='contact-links'>
        <Icon icon="ic:outline-email" />
        <Icon icon="il:instagram" />
      </div>
    </div>
  )
}
