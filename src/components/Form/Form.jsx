import React from 'react'

function Form() {
    return (
        <>
            <section id='contact' className="py-9">
                <div className="container px-2 lg:px-16 mx-auto">
                    <h2 className='text-lg mb-1 text-primary font-semibold text-center'>Contact</h2>
                    <h1 className='text-3xl font-semibold text-center mb-2'>Contact Us</h1>
                    <p className='text-base text-gray-700 text-center mb-5 lg:mb-10 w-3/4 mx-auto lg:w-full'>Whether you have questions about our services, need assistance with a project, or want to discuss a potential collaboration, our team is here to assist you.</p>

                    <form action="" className='mt-3 px-6'>
                        <div className='my-2 lg:my-7'>
                            <label htmlFor="name" className=''>Name:</label>
                            <br />
                            <input type="text" id='name' className='bg-gray-300 rounded-md w-full p-1' />
                        </div>
                        <div className='my-2 lg:my-7'>
                            <label htmlFor="email">Email:</label>
                            <br />
                            <input type="email" id='email' className='bg-gray-300 rounded-md w-full p-1' />
                        </div>
                        <div className='my-2 lg:my-7'>
                            <label htmlFor="name">Pesan:</label>
                            <br />
                            <textarea type="email" id='name' className='bg-gray-300 rounded-md w-full p-1' />
                        </div>
                        <input type="submit" value="Send" className='cursor-pointer text-bright hover:ring-secondary ring-2 hover:text-primary hover:bg-bright w-full bg-secondary h-11 rounded-full my-1' />
                    </form>
                </div>
            </section >
        </>
    )
}

export default Form