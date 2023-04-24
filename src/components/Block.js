export default function Block(props) {
    return(
        <div className="bg-cyan-600 m-6 h-fit flex-1 rounded p-6">
            {props.children}
        </div>
    )
}