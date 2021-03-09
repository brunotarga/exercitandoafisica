import Link from 'next/link';

function Home() {
    return <div>
        <h2>Página Inicial <Latex>$\frac{1}{2}$</Latex></h2> 

        <Link href="/Mecânica">
            <a>Mecânica</a>
        </Link>
    </div>
}

export default Home