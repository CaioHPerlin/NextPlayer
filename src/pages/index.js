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
    let authors;
    const currentAuthorStorage = JSON.parse(localStorage.getItem("author-list")) || null;
    if(currentAuthorStorage == null){
      localStorage.setItem("author-list", JSON.stringify(hardAuthors));
    }else{
      authors = currentAuthorStorage;
    }
    setStoredAuthors(authors)

    let videos;
    const currentVideoStorage = JSON.parse(localStorage.getItem("video-list")) || null;
    if(currentVideoStorage == null){
      localStorage.setItem("video-list", JSON.stringify(hardVideos));
    }else{
      videos = currentVideoStorage;
    }
    setStoredVideos(videos)
  }, [])
  
  return (
    <MainContainer>
      <Header/>
      <div className="w-5/6">
        <Block> 
          <h2 className="text-center mt-0 mb-6 font-semibold text-lg">Últimos Autores Cadastrados</h2>
          <div className="grid grid-cols-4 gap-6">
            {storedAuthors.slice(0, 4).map(author => <AuthorCard id={author.id} name={author.name} channel={author.channel} url={author.url}/>)}
          </div>
        </Block>
        <Block> 
          <h2 className="text-center mt-0 mb-6 font-semibold text-lg">Últimos Vídeos Cadastrados</h2>
          <div className="grid grid-cols-3 gap-6">   
            {storedVideos.slice(0, 4).map(video => <VideoCard id={video.id} title={video.title} description={video.description} language={video.language} author={video.author} url={video.url}/>)}
          </div>
        </Block>
      </div>
    </MainContainer>
  )
}
