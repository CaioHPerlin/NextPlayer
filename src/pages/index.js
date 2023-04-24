import Header from "@/components/Header";
import { useState, useEffect } from "react";
import Block from "@/components/Block";
import { hardVideos, hardAuthors } from "@/data/hardCoded";
import VideoCard from "@/components/VideoCard";
import MainContainer from "@/components/MainContainer";
import AuthorCard from "@/components/AuthorCard";

export default function Home() {
  const [storedAuthors, setStoredAuthors] = useState([])
  const [storedVideos, setStoredVideos] = useState([])

  useEffect(() => {
    let authors = hardAuthors;
    const currentAuthorStorage = JSON.parse(localStorage.getItem("author-list"));
    if(currentAuthorStorage != null){
        authors = currentAuthorStorage;
    }
    setStoredAuthors(authors)

    let videos = hardVideos;
    const currentVideoStorage = JSON.parse(localStorage.getItem("video-list"));
    if(currentVideoStorage != null){
        videos = currentVideoStorage;
    }
    setStoredVideos(videos)
  }, [])
  
  return (
    <MainContainer>
      <Header/>
      <div className="w-5/6">
        <Block> 
          <h2 className="text-center m-3 mb-6 font-semibold text-lg">Novos Autores</h2>
          <div className="grid grid-cols-3 gap-6">    
            {storedAuthors.map(author => <AuthorCard id={author.id} name={author.name} channel={author.channel} url={author.url}/>)}
          </div>
        </Block>
        <Block> 
          <h2 className="text-center m-3 mb-6 font-semibold text-lg">Novos Vídeos</h2>
          <div className="grid grid-cols-3 gap-6">   
            {storedVideos.map(video => <VideoCard id={video.id} title={video.title} description={video.description} language={video.language} author={video.author} url={video.url}/>)}
          </div>
        </Block>
      </div>
    </MainContainer>
  )
}
