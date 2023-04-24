import Block from "@/components/Block"
import Header from "@/components/Header"
import MainContainer from "@/components/MainContainer"
import { useState } from "react"
import { hardVideos } from "../data/hardCoded"

export default function VideoRegister() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [language, setLanguage] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setURL] = useState("")

    const registerNewVideo = (event) => {
        event.preventDefault();
        const newVideo = {
            id: Math.random().toString(24).slice(2, 7),
            title: title,
            description: description,
            language: language,
            author: author,
            url: url
        };

        let videos = hardVideos;
        const currentStorage = JSON.parse(localStorage.getItem("video-list"));
        if(currentStorage != null){
            videos = currentStorage;
        }
        videos.unshift(newVideo);
        localStorage.setItem("video-list", JSON.stringify(videos));
        clearForm();
    }

    const clearForm = () => {
        setTitle("");
        setDescription("");
        setLanguage("");
        setAuthor("");
        setURL("");
    }

    return(
        <MainContainer>
            <Header/>
            <Block>
                <h2 className="text-xl p-6 font-semibold pt-0 text-center">Cadastrar Novo Vídeo</h2>
                <form className="text-gray-300 grid grid-cols-1 gap-4 text-lg" onSubmit={registerNewVideo}>
                    <input required className="bg-cyan-700 rounded p-3" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" id="title"/>
                    <input required className="bg-cyan-700 rounded p-3" type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" id="description"/>
                    <select name="linguagem" className="bg-cyan-700 rounded p-3" type="text" value={language} onChange={e => setLanguage(e.target.value)} id="linguagem" required>
                        <option value="">Selecione</option>  
                        <option value="JavaScript">JavaScript</option>
                        <option value="HTML/CSS">HTML/CSS</option>
                        <option value="C#">C#</option>
                        <option value="PHP">PHP</option>
                    </select>
                    <input required className="bg-cyan-700 rounded p-3" type="text" value={author} placeholder="Autor" onChange={e => setAuthor(e.target.value)} id="author"/>
                    <input required className="bg-cyan-700 rounded p-3" type="text" value={url} placeholder="URL" onChange={e => setURL(e.target.value)} id="url"/>
                    <div className="text-white grid grid-cols-2 gap-4">
                        <button className="my-2 bg-emerald-500 p-6 text-xl rounded-md border-b-4 border-emerald-400">Cadastrar</button>
                        <center onClick={clearForm} className="cursor-pointer my-2 bg-emerald-500 p-6 text-xl rounded-md border-b-4 border-emerald-400">Limpar</center>
                    </div>
                </form>
            </Block>
        </MainContainer>
    )
}