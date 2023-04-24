import Link from "next/link";
import Thumb from "./Thumb";

export default function VideoCard(props) {

    let videoID;
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    var match = props.url.match(regExp)
    if (match && match[2].length == 11) {
        videoID = match[2]
    }

    return(
        <div className="grid grid-cols-1 text-justify p-6 bg-cyan-700 gap-6 rounded border-cyan-800 border-b-4">
            <Thumb videoID={videoID}/>
            <Link key={props.id} href={`/videos/${props.id}`}>{props.title}</Link>
            <p>{props.description}</p>
            <h2>{props.author} - {props.language}</h2>
        </div>
    );
}          