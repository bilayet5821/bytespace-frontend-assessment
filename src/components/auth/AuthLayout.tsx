import type {ReactNode} from 'react'
import {Link} from 'react-router-dom'
import {CourseCard} from '../courses/CourseCard'
import {HappyStudents} from '../decorative/FloatingStatCard'
import {courses} from '../../data/courses'
export function AuthLayout({mode,children}:{mode:'login'|'register';children:ReactNode}){
 const login=mode==='login'
 return <main id="main" className={`auth-page blue-grid auth-${mode}`}><div className="container"><Link className="auth-brand" to="/" aria-label="ByteSpace home"><img src="/assets/logo/bytespace-mark.svg" alt="ByteSpace" width="30" height="37"/></Link><div className="auth-grid"><aside className="auth-aside" aria-label="Discover ByteSpace"><h2>{login?'Sign in with ease':'Sign up and come in'}</h2><p>{login?'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.':'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.'}</p><div className="auth-art"><div className="auth-back-course"><CourseCard course={courses[1]} dark/></div><div className="auth-front-course"><CourseCard course={courses[2]} dark/></div><img className="decor auth-ring" src="/assets/decorations/ring-lime.webp" alt=""/><img className="decor auth-helix" src="/assets/decorations/helix-white-small.webp" alt=""/><img className="decor auth-pyramid" src="/assets/decorations/pyramid-lime.webp" alt=""/><HappyStudents lime/></div></aside><section className="auth-panel" aria-labelledby="auth-title">{children}</section></div></div></main>
}
