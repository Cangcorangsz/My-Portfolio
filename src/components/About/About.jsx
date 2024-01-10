import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function About() {
    return (
        <>
            <section id='about' className='container px-10 mt-20 mx-auto lg:mt-36'>
                <div className='grid grid-cols-1 gap-y-7 lg:grid-cols-2 gap-x-4'>
                    <div>
                        <h1 className='text-md text-primary font-semibold'>About Me</h1>
                        <h1 className='text-3xl font-bold mb-2'>An Idependent <br />Front-End Web Developer</h1>
                        <p className='lg:text-lg text-gray-700 text-base'>
                            Hello! I'm Dimas Rizki, a passionate Front-End Web Developer based in Indonesia. With a strong background in Web Programming, I strive to Make a contribution in communities. My journey in web programming has equipped me with valuable experiences and skills, allowing me to make a <span className='font-semibold'>Cool Website For You.</span>
                        </p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold lg:pt-6'>Let's Be a Friend</h1>
                        <p className='text-lg text-gray-700 mt-2 mb-3'>
                            I am actively involved in the digital space and love to share insights and updates on my GitHub and Instagram, where I explore some random topics and find a new friend. You can find me on Instagram at <span className='font-semibold'>@cangcorangsz</span>, where I share my thoughts on Hobby, my newest projects, etc. Let's connect and engage in meaningful conversations!
                        </p>
                        <div className='flex gap-x-3'>
                            <a target='_blank' href="https://www.instagram.com/dddimas.exe?igsh=MWd6OGk2a2M4aDlteA==" className='w-10 rounded-full border flex justify-center items-center h-10 text-dark border-dark hover:bg-dark hover:text-bright text-lg'>
                                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                            </a>
                            <a target='_blank' href="https://github.com/Cangcorangsz" className='w-10 rounded-full border flex justify-center items-center h-10 text-dark border-dark hover:bg-dark hover:text-bright text-lg'>
                                <FontAwesomeIcon icon="fa-brands fa-github" />
                            </a>
                            <a target='_blank' href="https://x.com/dddimasriz?t=JjZ8aPunehwBrpf95giRAg&s=09" className='w-10 rounded-full border flex justify-center items-center h-10 text-dark border-dark hover:bg-dark hover:text-bright text-lg'>
                                <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/dimas-bajuri-019453260/" className='w-10 rounded-full border flex justify-center items-center h-10 text-dark border-dark hover:bg-dark hover:text-bright text-lg'>
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About