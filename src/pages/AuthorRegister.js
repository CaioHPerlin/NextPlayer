import Block from "@/components/Block"
import Header from "@/components/Header"
import MainContainer from "@/components/MainContainer"
import { useState } from "react"
import { hardAuthors } from "../data/hardCoded"

export default function AuthorRegister() {

    const [name, setName] = useState("")
    const [channel, setChannel] = useState("")
    const [url, setURL] = useState("")

    const registerNewAuthor = (event) => {
        event.preventDefault();
        const newAuthor = {
            id: Math.random().toString(24).slice(2, 7),
            name: name,
            channel: channel,
            url: url
        };

        let authors = hardAuthors;
        const currentStorage = JSON.parse(localStorage.getItem("author-list"));
        if(currentStorage != null){
            authors = currentStorage;
        }
        authors.unshift(newAuthor);
        localStorage.setItem("author-list", JSON.stringify(authors));
        clearForm();
    }

    const clearForm = () => {
        setName("");
        setChannel("");
        setURL("");
    }

    return(
        <MainContainer>
            <Header/>
            <Block>
                <h2 className="text-xl p-6 font-semibold pt-0 text-center">Cadastrar Novo Autor</h2>
                <form className="text-gray-300 grid grid-cols-1 gap-4 text-lg" onSubmit={registerNewAuthor}>
                    <input required className="bg-cyan-700 rounded p-3" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" id="name"/>
                    <input required className="bg-cyan-700 rounded p-3" type="text" value={channel} onChange={e => setChannel(e.target.value)} placeholder="Nome do Canal" id="channel"/>
                    <input required className="bg-cyan-700 rounded p-3" type="text" value={url} placeholder="URL" onChange={e => setURL(e.target.value)} id="url"/>
                    <div className="text-white grid grid-cols-2 gap-4">
                        <button className="my-2 bg-emerald-500 p-6 text-xl rounded-md border-b-4 border-emerald-400 hover:bg-cyan-500 hover:border-cyan-400 transition">Cadastrar</button>
                        <center onClick={clearForm} className="cursor-pointer my-2 bg-emerald-500 p-6 text-xl rounded-md border-b-4 border-emerald-400 hover:bg-cyan-500 hover:border-cyan-400 transition">Limpar</center>
                    </div>
                </form>
            </Block>
        </MainContainer>
    )
}