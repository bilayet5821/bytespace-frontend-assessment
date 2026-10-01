import { useState } from 'react'
import { Hero } from '../sections/Hero'
import { Partners } from '../sections/Partners'
import { Discover } from '../sections/Discover'
import { LearningPaths } from '../sections/LearningPaths'
import { ProfessionalGrowth } from '../sections/ProfessionalGrowth'
export function HomePage(){const [query,setQuery]=useState('');return <main id="main"><Hero onSearch={value=>{setQuery(value);document.getElementById('courses')?.scrollIntoView()}}/><Partners/><Discover query={query} onClear={()=>setQuery('')}/><LearningPaths/><div className="features-surface"><ProfessionalGrowth/></div></main>}
