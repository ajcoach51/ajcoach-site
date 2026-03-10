import Link from 'next/link'
export default function Header(){return(
<header className="header">
<h1>AJCoach</h1>
<nav>
<Link href="/">Accueil</Link>
<Link href="/coaching">Coaching HPI</Link>
<Link href="/about">À propos</Link>
<Link href="/sessions">Séances</Link>
<Link href="/blog">Blog</Link>
<Link href="/contact">Contact</Link>
</nav>
</header>
)}
