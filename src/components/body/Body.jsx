'use client'
import { useState, useEffect } from "react"
import React from 'react'
import "../../app/globals.css"
import ReactPlayer from 'react-player/youtube'

export default function Body() {

  const URL = "https://www.youtube.com/watch?v=ABJJQLeVlqA&ab_channel=QianzhiShen"
  //checks the window to see if there is content, if there content then load the video player
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className='body-component'>
      {/* <div className="video-wrapper">
        {hasWindow && <ReactPlayer url={URL} controls='yes' className='video-player'/>}
      </div> */}
      <iframe className="video-player" width="560" height="315" src="https://www.youtube.com/embed/ABJJQLeVlqA?si=GH0cKTreCREuMo6F" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}
