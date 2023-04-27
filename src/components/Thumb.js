import Image from "next/image"

export default function Thumb(props) {

    const url = `https://img.youtube.com/vi/${props.videoID}/hqdefault.jpg`

    return(
        <div className="relative aspect-video justify-center p-3">
            <Image className="object-cover" fill src={url}></Image>
        </div>
    )
}