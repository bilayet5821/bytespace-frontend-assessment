import { Hero } from '../sections/Hero'
export function HomePage(){return <main id="main"><Hero onSearch={()=>document.getElementById('courses')?.scrollIntoView()}/></main>}
