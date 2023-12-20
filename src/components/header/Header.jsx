import React from 'react'
import "../../app/globals.css"

export default function Header() {
  return (
    <div className='header-component'>
        <div className='title'>
            <h1>Qianzhi Shen</h1>
            <h4>Steadicam Operator</h4>
        </div>
        <nav className='nav-bar'>
            <div>Past Work</div>
            <div>Equipment</div>
        </nav>
    </div>
  )
}
