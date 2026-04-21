import React from 'react'
import { imgImage7, imgImage9, imgImage31 } from '../figmaAssets'

const products = [
  { id:1, title:'Vino Tinto Viña Vieja Valle de Ica Malbec Botella 750ml.', price:'S/.30.00', img: imgImage7 },
  { id:2, title:'Los Cuates Tortillas Fritas a Base de Maíz Rancheritos', price:'S/.1.50', img: imgImage9 },
  { id:3, title:'Gaseosa Inka Kola Botella 600ml', price:'S/.3.60', img: imgImage31 },
]

function ProductCard({p}){
  return (
    <div className="bg-white rounded border border-[rgba(0,0,0,0.06)] p-4 rounded-20">
      <div className="h-48 flex items-center justify-center overflow-hidden">
        <img src={p.img} alt={p.title} className="object-contain h-full" />
      </div>
      <div className="mt-3 text-sm text-gray-700">{p.title}</div>
      <div className="mt-2 font-medium text-lg">{p.price}</div>
    </div>
  )
}

export default function Products(){
  return (
    <section className="py-12 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl text-center font-semibold">Productos Destacados</h2>
        <p className="text-center text-sm text-gray-500 mt-2">Los productos más populares entre nuestros clientes.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {products.map(p => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
