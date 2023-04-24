import Link from "next/link";

export default function AuthorCard(props) {
    return(
        <div className="grid grid-cols-1 text-justify p-6 bg-cyan-700 gap-6 rounded border-cyan-800 border-b-4">
            <Link key={props.id} href={`/autores/${props.id}`}>
                {props.name}
                <p className="font-bold" >{props.channel}</p>
                <h2>{props.url}</h2>
            </Link>
        </div>
    );
}          