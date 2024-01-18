import React from 'react'

function Hero() {
    return (
        <>
            <section id='home' className='container px-10 pt-20 mx-auto lg:pt-36 lg:h-[90dvh]'>
                <div className='w-full grid grid-cols-1 items-center justify-items-center gap-3 lg:grid-cols-2 lg:gap-0'>
                    <div>
                        <h4 className='text-lg mb-1 text-primary font-semibold'>Welcome to My Website👋</h4>
                        <h2 className='lg:text-5xl text-4xl font-bold mb-1 uppercase'><span className='hidden lg:contents'>I'm</span> Dimas Bajuri</h2>
                        <h3 className='text-xl mb-2'>A Front-End <span className='font-semibold'>Web Developer</span></h3>
                        <p className='text-base mb-7 text-gray-800'>I specialize in crafting seamless and visually appealing online experiences. My passion lies in turning creative ideas into functional and user-friendly websites that leave a lasting impression</p>
                        <button className='p-2 rounded-full bg-secondary text-bright border-2 border-transparent hover:text-dark hover:bg-bright hover:border-2 hover:border-secondary transition duration-200'>
                            <a href="#contact">Contact Us</a>
                        </button>
                    </div>
                    <div className='lg:justify-self-center'>
                        <img src="hero.png" alt="" className='z-10 bg-blob w-96' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero