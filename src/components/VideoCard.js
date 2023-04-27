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
        <Link key={props.id} href={`/videos/${props.id}`} className="grid grid-cols-2 items-center text-left p-6 bg-cyan-700 gap-6 rounded border-cyan-800 border-b-4 hover:bg-emerald-500 hover:border-emerald-400 transition">
            <Thumb videoID={videoID}/>
            <div>
                <h2 className="font-bold">{props.title}</h2>
                <span>{props.author} - {props.language}</span>
            </div>
        </Link>
    );
}          