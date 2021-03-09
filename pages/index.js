import Link from 'next/link';
<html>
    <head>
        <link
            href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
            rel="stylesheet"
        />
    </head>
</html>
var Latex = require('react-latex');
function Home() {
    return <div>
        <h2>Página Inicial <Latex>$\frac{1}{2}$</Latex></h2> 

        <Link href="/Mecânica">
            <a>Mecânica</a>
        </Link>
    </div>
}

export default Home