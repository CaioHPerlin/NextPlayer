import Header from "@/components/Header"
import { useRouter } from "next/router"
import { hardAuthors } from "@/data/hardCoded"
import { useState, useEffect } from "react"
import Block from "@/components/Block"

export default function Player() {
    const router = useRouter()
    const [thisAuthor, setThisAuthor] = useState({})

    useEffect(() => {
        let authors;
        const currentAuthorStorage = JSON.parse(localStorage.getItem("author-list")) || null;
        if(currentAuthorStorage == null){
            localStorage.setItem("author-list", JSON.stringify(hardAuthors));
        }else{
            authors = currentAuthorStorage;
        }
        let current = authors.filter(author => author.id==router.query.id)[0]
        setThisAuthor(current)
    }, [])
    
    return(
        <div className="flex text-lg">
            <Header/>
            <Block>
                <h2 className="text-center text-xl font-semibold mb-3">{thisAuthor.name}</h2>
                <p className="text-center mt-3">{thisAuthor.channel}</p>
                <code className="flex justify-center mt-3">{thisAuthor.url}</code>
            </Block>
        </div>
    )
}