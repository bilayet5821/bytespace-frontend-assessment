import { useState } from 'react'
import { Hero } from '../sections/Hero'
import { Partners } from '../sections/Partners'
import { Discover } from '../sections/Discover'
export function HomePage(){const [query,setQuery]=useState('');return <main id="main"><Hero onSearch={value=>{setQuery(value);document.getElementById('courses')?.scrollIntoView()}}/><Partners/><Discover query={query} onClear={()=>setQuery('')}/></main>}
