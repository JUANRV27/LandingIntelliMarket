import React from 'react'
import { imgImage6 } from '../figmaAssets'

export default function Hero(){
  return (
    <section className="hero-gradient text-white py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold">Bienvenido a IntelliMarket</h1>
          <p className="mt-3 text-lg opacity-90">Descubre los mejores productos locales para tu hogar.</p>
          <button className="mt-6 bg-[#0c8ce9] hover:bg-blue-700 px-5 py-2 rounded text-white">Comenzar la experiencia</button>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <div className="w-64 h-44 rounded-20 overflow-hidden card-shadow bg-white">
            <img src={imgImage6} alt="store" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
