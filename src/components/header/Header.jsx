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
          <h4>STEADICAM OPERATOR</h4>
        </div>

        <div className='page-links'>
          <Link href='/'> 
            <ul>
              DEMOREEL
            </ul>
          </Link>
          <Link href='/projects'> 
            <ul>
              PROJECTS
            </ul>
          </Link>
          <Link href='/equipment'> 
            <ul>
              EQUIPMENT
            </ul>
          </Link>
        </div>

    </div>
  )
}
