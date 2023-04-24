import Link from "next/link";

export default function Header() {
    return(
        <header className="h-100 min-h-screen bg-cyan-600 w-1/6">
            <div className="h-64 grid grid-cols-1  p-6 font-semibold">
                <h2 className="text-xl p-6"> NextPlayer</h2>
                <nav className="text-lg grid grid-cols-1 gap-3 items-center p-6">
                    <Link href="/">Home</Link>
                    <Link href="/VideoRegister">Cadastrar Vídeo</Link>
                    <Link href="/VideoList">Listar Vídeos</Link>
                    <Link href="/AuthorRegister">Cadastrar Autores</Link>
                    <Link href="/AuthorList">Listar Autores</Link>
                </nav>
            </div>
        </header>
    )
}