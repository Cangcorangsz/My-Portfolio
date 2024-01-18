import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <>
            <div className='w-full bg-dark'>
                <div className="container w-full gradient lg:py-10 flex mx-auto justify-evenly flex-col lg:flex-row p-5 gap-y-14">
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-bright font-semibold'>This Website <br />Made With</h1>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="https://react.dev/">React</a>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="https://vitejs.dev/">Vite</a>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="https://tailwindcss.com/">Tailwind</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-bright font-semibold'>Links</h1>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="#">Home</a>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="#about">About Me</a>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="#portfolio">My Projects</a>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="#blog">My Articles</a>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="#contact">Contact</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-bright font-semibold'>Other Social Media</h1>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="https://www.instagram.com/dddimas.exe?igsh=MWd6OGk2a2M4aDlteA==">Insagram</a>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="https://x.com/dddimasriz?t=JjZ8aPunehwBrpf95giRAg&s=09">X (Twitter)</a>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="https://github.com/Cangcorangsz">GitHub</a>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="https://www.facebook.com/profile.php?id=100076604437773">Facebook</a>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="https://www.linkedin.com/in/dimas-bajuri-019453260/">LinkedIn</a>
                        <a target='_blank' className='text-slate-700 hover:text-slate-500' href="https://www.reddit.com/user/BebekGoyangz/">Reddit</a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Footer