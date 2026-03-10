import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
export default function Home(){return(
<>
<Header/>
<HeroSection/>
<section className="section">
<h2>Vous vous reconnaissez ?</h2>
<ul>
<li>✔ Mental très actif</li>
<li>✔ Hypersensibilité</li>
<li>✔ Impression de décalage</li>
<li>✔ Intensité intérieure</li>
</ul>
</section>
<section className="section">
<h2>Mon accompagnement</h2>
<p>J’accompagne les adultes à haut potentiel pour mieux comprendre leur fonctionnement, retrouver un équilibre émotionnel et transformer leur singularité en force.</p>
</section>
<section className="section">
<h2>Séances de Magnétisme</h2>
<p>Séances individuelles certifiées pour retrouver équilibre et énergie.</p>
<a href="https://calendly.com/ajcoach/seance" className="btn" target="_blank">Réserver une séance de Magnétisme</a>
</section>
<Footer/>
</>
)}
