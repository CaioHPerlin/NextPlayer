import Block from "@/components/Block"
import Header from "@/components/Header"
import MainContainer from "@/components/MainContainer"
import { useEffect, useState } from "react"
import { hardAuthors } from "@/data/hardCoded"
import AuthorCard from "@/components/AuthorCard"

export default function VideoRegister() {
    const [storedAuthors, setStoredAuthors] = useState([])

    useEffect(() => {
        let authors = hardAuthors;
        const currentStorage = JSON.parse(localStorage.getItem("author-list"));
        if(currentStorage != null){
            authors = currentStorage;
        }

        setStoredAuthors(authors)
    }, [])

    return(
        <MainContainer>
            <Header/>
            <Block>
                <div className="grid grid-cols-3 gap-6">    
                    {storedAuthors.map(author => <AuthorCard id={author.id} name={author.name} channel={author.channel} url={author.url}/>)}
                </div>
            </Block>
        </MainContainer>
    )
}