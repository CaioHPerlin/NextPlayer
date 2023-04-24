export default function Video(props) {

    const url = `https://www.youtube.com/embed/${props.videoID}`

    return(
        <div className="flex justify-center p-3">
            <iframe
            className="aspect-video w-1/2"
            src={url}
            allow="clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>
        </div>
    )
}