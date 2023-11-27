import Link from "next/link"
import { merriweather } from "../layout"


export default function Header() {
  return <header className={`${merriweather.className} flex justify-between text-center mt-6`}>

  <Link className="text-2xl" href="/">Demie M.</Link>
    
  <nav className="flex justify-between gap-4">
    <Link href="/about">About</Link>
    <Link href="/projects">Projects</Link>
    <Link href="/blog">Blog</Link>
  </nav>  

  </header>
}