import Header from "@/components/Header"
import Video from "@/components/Video"
import { useRouter } from "next/router"
import { hardVideos } from "@/data/hardCoded"
import { useState, useEffect } from "react"
import Block from "@/components/Block"

export default function Player() {
    const router = useRouter();
    const [thisVideo, setThisVideo] = useState({});
    const [thisID, setThisID] = useState("");

    useEffect(() => {
        let videos;
        const currentVideoStorage = JSON.parse(localStorage.getItem("video-list")) || null;
        if(currentVideoStorage == null){
            localStorage.setItem("video-list", JSON.stringify(hardVideos));
        }else{
            videos = currentVideoStorage;
        }
        let current = videos.filter(video => video.id==router.query.id)[0];
        setThisVideo(current);

        let videoID = "";
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = current.url.match(regExp);
        if (match && match[2].length == 11) {
            videoID = match[2];
        }
        setThisID(videoID);
    }, [])

    
    
    return(
        <div className="text-lg flex">
            <Header/>
            <Block>
                <h2 className="text-xl font-semibold mb-3 text-center">{thisVideo.title}</h2>
                <Video videoID={thisID}/>
                <p className="mt-3 font-semibold text-center">{thisVideo.description}</p>
                <h2 className="text-center text-lg">{thisVideo.author} - {thisVideo.language}</h2>
            </Block>
        </div>
    )
}