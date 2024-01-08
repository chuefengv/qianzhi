'use client'
import { useState } from "react"
import { projectlist } from "../projectlist"
import "../../app/globals.css"
import "../../../node_modules/react-modal-video/scss/modal-video.scss"
import ModalVideo from 'react-modal-video'

export default function projects() {

  const [isOpen, setOpen] = useState(false)
  const [videoId,setVideoId] = useState("")

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="projects">
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={onCloseModal} />

      
        {projectlist.map((video,index)=>{
            return(
                <div className="image-wrapper" onClick={onOpenModal} >
                    <img key={index} src={video.image} alt={video.title} />
                    <div className="image-title">
                      <h4>{video.title}</h4>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
