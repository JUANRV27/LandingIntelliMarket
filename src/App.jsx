import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Vision from './components/Vision'

export default function App(){
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <Vision />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
