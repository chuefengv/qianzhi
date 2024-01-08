'use client'
import React from 'react'
import "../../app/globals.css"
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });


export default function Demoreel() {
  const URL = "https://www.youtube.com/watch?v=ABJJQLeVlqA"

  return (
    <div className='demoreel'>
      <div className="player-wrapper">
        <ReactPlayer 
          className='react-player'
          width='100%'
          height='100%'
          controls={true}
          url={URL}
        />
      </div>
    </div>
  )
}
