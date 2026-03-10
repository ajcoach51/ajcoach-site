import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Sessions(){return(
<>
<Header/>
<section className="section">
<h1>Mes Séances</h1>
<h2>Coaching HPI / HPE</h2>
<ul>
<li>Séance découverte – 30 min – visio</li>
<li>Séance individuelle – 1h – visio ou présentiel</li>
<li>Programme personnalisé – plusieurs séances</li>
</ul>
<a href="https://calendly.com/ajcoach/seance" className="btn" target="_blank">Réserver Coaching</a>
<h2>Séances de Magnétisme</h2>
<ul>
<li>Séance découverte – 30 min – visio ou présentiel</li>
<li>Séance complète – 1h – visio ou présentiel</li>
<li>Programme personnalisé – plusieurs séances</li>
</ul>
<a href="https://calendly.com/ajcoach/seance" className="btn" target="_blank">Réserver Magnétisme</a>
</section>
<Footer/>
</>
)}
