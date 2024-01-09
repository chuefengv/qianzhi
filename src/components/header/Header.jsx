import React from 'react'
import Link from 'next/link'
import "../../app/globals.css"

export default function Header() {
  return (
    <div className='header-component'>
      
        <div className='header-title'>
          <Link href='/'>
            <h1>QIANZHI SHEN</h1>
          </Link>
          <h4>STEADICAM / CAMERA OPERATOR</h4>
        </div>

        <div className='page-links'>
          <Link className='link-el' href='/'> 
              REEL
          </Link>
          <Link className='link-el' href='/projects'> 
              WORK
          </Link>
          <Link className='link-el' href='/equipment'> 
              ABOUT
          </Link>
        </div>

    </div>
  )
}
