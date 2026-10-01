import { useState } from 'react'
import { Icon } from './Icon'
export function SearchField({onSearch}:{onSearch:(value:string)=>void}){
 const [value,setValue]=useState('')
 return <form className="hero-search" role="search" onSubmit={e=>{e.preventDefault();onSearch(value)}}><label className="search-input"><Icon name="search"/><span className="sr-only">Search courses, topics or creators</span><input type="search" placeholder="Course, topic, creator" value={value} onChange={e=>setValue(e.target.value)}/></label><button className="button" type="submit">Search</button></form>
}
