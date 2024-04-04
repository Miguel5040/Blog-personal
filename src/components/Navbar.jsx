import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => (
    <nav className="flex justify-between py-6">
        <Link className="font-bold" to={'/'}>
            HotCoffee
        </Link>
        <div className="md:flex gap-[80px] hidden">
            <div className="flex gap-8">
                <Link className="hover:text-[#662bc5] hover:scale-[1.04]" to={'/'}>Home</Link>
                <Link className="hover:text-[#662bc5] hover:scale-[1.04]" to={'/articles'}>Articles</Link>
            </div>
            <div className="flex gap-8">
                <a href="https://www.linkedin.com/in/miguel-alberto-ordonez/" target="_blank"><img className="h-[25px]" src="./icons/linkedin.svg" /></a>
                <a href="https://github.com/Miguel5040" target="_blank"><img className="h-[25px]" src="./icons/github.svg" /></a>
                <a href="https://portafolio-web-miguel-alberto.vercel.app/" target="_blank"><img className="h-[25px]" src="./icons/profile.svg" /></a>
            </div>
        </div>
        <div className="md:hidden">
            <span>#</span>
        </div>
    </nav>
)

export default Navbar