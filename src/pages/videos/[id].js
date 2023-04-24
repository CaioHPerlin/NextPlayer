import Header from "@/components/Header"
import Video from "@/components/Video"
import { useRouter } from "next/router"
import { hardVideos } from "@/data/hardCoded"
import { useState, useEffect } from "react"
import Block from "@/components/Block"

export default function Player() {
    const router = useRouter()
    const [thisVideo, setThisVideo] = useState({
        id: null,
        title: "",
        description: "",
        language: "",
        author: "",
        url: ""
    })

    useEffect(() => {
        let videos = hardVideos;
        const currentStorage = JSON.parse(localStorage.getItem("video-list"));
        if(currentStorage != null){
            videos = currentStorage;
        }
        let current = videos.filter(video => video.id==router.query.id)[0]
        setThisVideo(current)
    }, [])

    let videoID;
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    var match = thisVideo.url.match(regExp)
    if (match && match[2].length == 11) {
        videoID = match[2]
    }
    
    return(
        <div className="flex text-lg">
            <Header/>
            <Block>
                <h2 className="text-xl font-semibold mb-3">{thisVideo.title}</h2>
                <Video videoID={videoID}/>
                <p className="mt-3">{thisVideo.description}</p>
                <h2 className="text-right">{thisVideo.author} - {thisVideo.language}</h2>
            </Block>
        </div>
    )
}