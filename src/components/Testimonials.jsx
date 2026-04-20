import React from 'react'
import { imgFrame427318817 } from '../figmaAssets'

const reviews = [
  {id:1, name:'Ana Pérez', text:'Me facilitó el esfuerzo de tener que averiguar los precios', stars:5},
  {id:2, name:'Carlos C.', text:'Excelente servicio', stars:5},
  {id:3, name:'María López', text:'Me encanta comprar aquí, siempre hay algo nuevo.', stars:5},
]

export default function Testimonials(){
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex md:items-start md:gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">Opiniones de Nuestros Clientes</h3>
            <p className="text-sm text-gray-500 mt-2">Lo que dicen nuestros clientes sobre nosotros.</p>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-0">
            {reviews.map(r => (
              <div key={r.id} className="p-4 bg-[rgba(0,0,0,0.05)] rounded">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{r.name}</div>
                  <div className="h-3 w-20">
                    <img src={imgFrame427318817} alt="stars" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="text-sm text-gray-700 mt-3">{r.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
