import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const posts={
"hpi-se-sentent-differentes":{title:"Pourquoi les personnes HPI se sentent différentes",content:"Les personnes à haut potentiel (HPI) ressentent souvent un décalage avec leur environnement..."},
"7-caracteristiques-haut-potentiel":{title:"Les 7 caractéristiques du haut potentiel",content:"Voici 7 caractéristiques courantes des adultes HPI..."},
"seances-magnetisme-bienfaits":{title:"Séances de magnétisme : bienfaits et conseils",content:"Les séances de magnétisme permettent de retrouver équilibre et énergie..."}
}

export default function Post(){
const router=useRouter()
const {slug}=router.query
const post=posts[slug]
if(!post) return <p>Article introuvable</p>
return(
<>
<Header/>
<section className="section">
<h1>{post.title}</h1>
<p>{post.content}</p>
</section>
<Footer/>
</>
)
}
