import "../../app/globals.css"
import { projectlist } from "../projectlist"

export default function projects() {
  return (
    <div className="projects">
        {projectlist.map((video,index)=>{
            return(
                <div className="image-wrapper">
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
