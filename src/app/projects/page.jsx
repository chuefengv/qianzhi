'use client'
import { useState } from "react"
import { projectlist } from "../projectlist"
import "../../app/globals.css"
import "../../../node_modules/react-modal-video/scss/modal-video.scss"
import ModalVideo from 'react-modal-video'

export default function projects() {

  const [isOpen, setOpen] = useState(false)
  const [videoId,setVideoId] = useState(" ")

  const getVideo = (videoid) =>{
    setVideoId(videoid)
    if(videoid){
      setOpen(true)
    }
  }

  return (
    <div className="projects">
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={()=>setOpen(false)} />

      
        {projectlist.map((video,index)=>{
            return(
                <div key={index} className="image-wrapper" onClick={()=>getVideo(video.videoid)} >
                    <img  src={video.image} alt={video.title} />
                    <div className="image-title">
                      <h4>{video.title}</h4>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
