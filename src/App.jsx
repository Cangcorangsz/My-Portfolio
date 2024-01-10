import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Blog from './components/blog/Blog';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='bg-bright'>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Blog />
      <Form />
      <Footer />
    </div>
  )
}

export default App