export default function MainContainer(props) {
    return(
        <main className="flex items-top flex-nowrap">
            {props.children}
        </main>
    )
}