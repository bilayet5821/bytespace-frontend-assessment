import { Header } from '../components/layout/Header'
import { Decorations } from '../components/decorative/Decorations'
import { HappyStudents,ProgressCard } from '../components/decorative/FloatingStatCard'
import { SearchField } from '../components/ui/SearchField'
export function Hero({onSearch}:{onSearch:(value:string)=>void}){
 return <section className="hero blue-grid" aria-labelledby="hero-title"><Header/><div className="hero-copy container"><h1 id="hero-title">Get Access to Hundreds<br className="desktop-break"/> Courses Available</h1><p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p><SearchField onSearch={onSearch}/></div><Decorations/><div className="hero-visual"><div className="hero-orbit"/><img className="hero-student" src="/assets/people/hero-student.png" width="722" height="515" alt="Student with headphones holding a laptop" fetchPriority="high"/><div className="floating-card subject-card"><p>UI/UX Design</p><small>200 Courses&nbsp; • &nbsp;1000+ Students</small></div><ProgressCard/><HappyStudents/></div></section>
}
