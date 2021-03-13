import Link from 'next/link';
function Home() {
    return <div>
        
        <h1>Página Inicial</h1>

        <Link href="/Mecânica">
            <a>Mecânica</a>
        </Link>

        <Link href="/Termodinâmica">
            <a>Termodinâmica</a>
        </Link>

        <Link href="/Eletromagnetismo">
            <a>Eletromagnetismo</a>
        </Link>

        <Link href="/Moderna">
            <a>Moderna</a>
        </Link>
        
    </div>
}

export default Home