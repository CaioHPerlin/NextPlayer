import Link from "next/link";

export default function AuthorCard(props) {
    return(
        <Link key={props.id} href={`/autores/${props.id}`}>
            <div className="grid grid-cols-1 text-justify p-6 bg-cyan-700 gap-2 rounded border-cyan-800 border-b-4 hover:bg-emerald-500 hover:border-emerald-400 transition">
                {props.name}
                <p className="font-bold" >{props.channel}</p>
                <h2>{props.url}</h2>
            </div>
        </Link>
    );
}          