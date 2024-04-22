import React from "react"

const Footer = () => {

    return (
        <footer className="flex justify-between items-center mt-[50px] border-t-2 py-6">
            <div className="flex md:flex-row flex-col gap-4">
                <strong>HotCoffee</strong> <span>blog personal de tecnologia</span>
            </div>
            <div className="flex gap-8">
                <a href="https://www.linkedin.com/in/miguel-alberto-ordonez/" target="_blank"><img className="h-[25px]" src="./icons/linkedin.svg" /></a>
                <a href="https://github.com/Miguel5040" target="_blank"><img className="h-[25px]" src="./icons/github.svg" /></a>
                <a href="https://portafolio-web-miguel-alberto.vercel.app/" target="_blank"><img className="h-[25px]" src="./icons/profile.svg" /></a>
            </div>
        </footer>
    )
}

export default Footer
