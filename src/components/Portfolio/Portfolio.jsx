import React from 'react'
import img1 from '/portfolio-img1.png'
import img2 from '/portfolio-img2.png'

function PortfolioImage(props) {
    return (
        <>
            <div className="card border rounded-lg bg-bright hover:shadow-lg hover:brightness-105 transition duration-150">
                <a href={props.href} target='_blank'>
                    <img src={props.source} className='rounded-ss-lg rounded-se-lg' alt="Error Load" />
                    <div className='p-3 pt-0 box-border'>
                        <h1 className='text-lg font-semibold mt-4 mb-1'>{props.header}</h1>
                        <p className='text-gray-600 text-sm lg:text-base'>{props.note}</p>
                    </div>
                </a>
            </div>
        </>
    )
}

function Portfolio() {
    return (
        <>
            <section id='portfolio' className='mt-20 lg:mt-40 bg-slate-300 py-9'>
                <div className="container px-10 lg:px-16 mx-auto">
                    <h2 className='text-lg mb-1 text-primary font-semibold text-center'>Portfolio</h2>
                    <h1 className='text-3xl font-semibold text-center mb-2'>Newest Projects</h1>
                    <p className='text-base text-gray-700 text-center mb-5 lg:mb-10'>Explore my diverse portfolio showcasing a collection of projects where creativity meets functionality.</p>
                    <div className='w-full grid grid-cols-1 items-start gap-8 lg:grid-cols-2'>
                        <PortfolioImage source={img1} href="https://cangcorangsz.github.io/bakery/" header="Flourish Bakery" note="Flourish Bakery is a cute website I made for a pretend bakery. It's all about showing off yummy treats and creating a cozy online space. I focused on making it easy to use and nice to look at, just like the bakery itself." />
                        <PortfolioImage source={img2} href="https://cangcorangsz.github.io/market/" header="Gaming Market" note="Gaming Market is a cool project where I built a website for gamers. You can check out and buy the newest games and accessories. I tried to make the site super easy to use, capturing the fun and excitement of the gaming world." />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio