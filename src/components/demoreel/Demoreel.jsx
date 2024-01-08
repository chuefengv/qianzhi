'use client'
import React from 'react'
import { useState, useEffect } from "react"
import "../../app/globals.css"
import ReactPlayer from "react-player"

export default function Demoreel() {
    //checks the window to see if there is content, if there content then load the video player
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
      if (typeof window !== "undefined") {
        setHasWindow(true);
      }
    }, []);

  const URL = "https://www.youtube.com/watch?v=ABJJQLeVlqA&ab_channel=QianzhiShen"

  return (
    <div className='demoreel'>
      <div className="player-wrapper">
        <ReactPlayer 
          className='react-player'
          width='100%'
          height='100%'
          url={URL}
        />
      </div>
    </div>
  )
}
