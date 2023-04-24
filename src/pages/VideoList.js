import Block from "@/components/Block"
import Header from "@/components/Header"
import MainContainer from "@/components/MainContainer"
import { useEffect, useState } from "react"
import { hardVideos } from "@/data/hardCoded"
import VideoCard from "@/components/VideoCard"

export default function VideoRegister() {
    const [storedVideos, setStoredVideos] = useState([])

    useEffect(() => {
        let videos = hardVideos;
        const currentStorage = JSON.parse(localStorage.getItem("video-list"));
        if(currentStorage != null){
            videos = currentStorage;
        }

        setStoredVideos(videos)
    }, [])

    return(
        <MainContainer>
            <Header/>
            <Block>
                <div className="grid grid-cols-3 gap-6">    
                    {storedVideos.map(video => <VideoCard id={video.id} title={video.title} description={video.description} language={video.language} author={video.author} url={video.url}/>)}
                </div>
            </Block>
        </MainContainer>
    )
}