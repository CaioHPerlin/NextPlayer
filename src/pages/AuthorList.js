import Block from "@/components/Block"
import Header from "@/components/Header"
import MainContainer from "@/components/MainContainer"
import { useEffect, useState } from "react"
import AuthorCard from "@/components/AuthorCard"

export default function VideoRegister() {
    const [storedAuthors, setStoredAuthors] = useState([])

    useEffect(() => {
        let authors = JSON.parse(localStorage.getItem("author-list"))
        setStoredAuthors(authors)
    }, [])

    return(
        <MainContainer>
            <Header/>
            <Block>
                <div className="grid grid-cols-4 gap-6">    
                    {storedAuthors.map(author => <AuthorCard id={author.id} name={author.name} channel={author.channel} url={author.url}/>)}
                </div>
            </Block>
        </MainContainer>
    )
}