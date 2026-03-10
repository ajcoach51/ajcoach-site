import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

const articles=[
{title:"Pourquoi les personnes HPI se sentent différentes",slug:"hpi-se-sentent-differentes",date:"2026-03-10"},
{title:"Les 7 caractéristiques du haut potentiel",slug:"7-caracteristiques-haut-potentiel",date:"2026-03-10"},
{title:"Séances de magnétisme : bienfaits et conseils",slug:"seances-magnetisme-bienfaits",date:"2026-03-10"}
]

export default function Blog(){return(
<>
<Header/>
<section className="section">
<h1>Blog</h1>
<ul>
{articles.map(article=>(
<li key={article.slug}><Link href={}>{article.title} ({article.date})</Link></li>
))}
</ul>
</section>
<Footer/>
</>
)}
