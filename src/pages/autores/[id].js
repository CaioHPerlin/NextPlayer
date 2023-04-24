import Header from "@/components/Header"
import { useRouter } from "next/router"
import { hardAuthors } from "@/data/hardCoded"
import { useState, useEffect } from "react"
import Block from "@/components/Block"

export default function Player() {
    const router = useRouter()
    const [thisAuthor, setThisAuthor] = useState({
        id: null,
        name: "",
        channel: "",
        url: ""
    })

    useEffect(() => {
        let authors = hardAuthors;
        const currentStorage = JSON.parse(localStorage.getItem("author-list"));
        if(currentStorage != null){
            authors = currentStorage;
        }
        let current = authors.filter(author => author.id==router.query.id)[0]
        setThisAuthor(current)
    }, [])
    
    return(
        <div className="flex text-lg">
            <Header/>
            <Block>
                <h2 className="text-xl font-semibold mb-3">{thisAuthor.name}</h2>
                <p className="mt-3">Canal: {thisAuthor.channel} — {thisAuthor.url}</p>
            </Block>
        </div>
    )
}