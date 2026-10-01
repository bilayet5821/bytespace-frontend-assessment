import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
export default function App() {
 return <BrowserRouter><a className="skip-link" href="#main">Skip to content</a><Routes><Route path="/" element={<HomePage/>}/><Route path="/login" element={<LoginPage/>}/><Route path="/register" element={<RegisterPage/>}/><Route path="*" element={<main id="main" className="page-message"><h1>Page not found</h1><p>Visit ByteSpace to discover courses.</p><Link className="button" to="/">Back to Home</Link></main>}/></Routes></BrowserRouter>
}
