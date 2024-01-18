import React, { useEffect, useState } from 'react'
import myLogo from '/logo.svg'
import './Navbar.css'

const navMenu = [
    { id: "1", name: "Home", href: "#" },
    { id: "2", name: "About", href: "#about" },
    { id: "3", name: "Porfolio", href: "#portfolio" },
    { id: "4", name: "Blog", href: "#blog" },
    { id: "5", name: "Contact", href: "#contact" },
];

function Navbar() {
    const [navButtonActive, setNavButtonActive] = useState(false)
    const [navScroll, setNavScroll] = useState(false)

    useEffect(() => {

        function navScrolled() {
            const header = document.querySelector("header");
            const fixedNav = header.offsetTop;


            if (window.scrollY > fixedNav) {
                setNavScroll(true);
            } else {
                setNavScroll(false);
            }
        }

        window.addEventListener('scroll', navScrolled)

        return () => {
            window.removeEventListener('scroll', navScrolled)
        };
    }, []);

    function navButton() {
        setNavButtonActive(!navButtonActive);
    }

    return (
        <>
            <header className={`inset-x-0 w-full top-0 fixed${navScroll ? ` bg-bright bg-opacity-70 backdrop-blur-sm z-50 shadow-md` : ``}`}>
                <div className="container flex items-center justify-between py-4 px-7 box-border relative inset-x-0 min-w-full">
                    <div>
                        <a href="#">
                            <img src={myLogo} alt="" className='w-8 h-8 lg:w-10 lg:h-10' />
                        </a>
                    </div>
                    <div className='flex'>
                        <button className={`flex flex-col gap-y-1${navButtonActive ? ` nav-button-active` : ``} lg:hidden`} onClick={navButton} >
                            <span className='w-6 h-1 bg-dark rounded-md origin-top-left'></span>
                            <span className='w-6 h-1 bg-dark rounded-md'></span>
                            <span className='w-6 h-1 bg-dark rounded-md origin-bottom-left'></span>
                        </button>
                        <nav className={`${navButtonActive ? ` flex` : ` hidden`} bg-bright absolute top-full flex-col right-5 text-right gap-y-2 p-5 rounded-md shadow-lg lg:flex lg:flex-row lg:top-0 lg:shadow-none lg:bg-transparent`}>
                            {navMenu.map((item) => {
                                return (
                                    <>
                                        <a key={item.id} href={item.href} className={`hover:bg-dark hover:text-slate-100 text-primabg-dark pl-7 py-1 pr-2 rounded-md transition duration-150 lg:hover:bg-transparent lg:hover:hover:text-slate-800`}>
                                            {item.name}
                                        </a>
                                    </>
                                )
                            })}
                        </nav>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Navbar