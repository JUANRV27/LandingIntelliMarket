import React from 'react'

const items = [
  {title:'Calidad', text:'Seleccionamos solo los mejores productos del mercado.'},
  {title:'Local', text:'Apoyamos a productores locales para ofrecer frescura y autenticidad.'},
  {title:'Variedad', text:'Una amplia selección de bebidas, abarrotes, snacks y más.'},
]

export default function Features(){
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold">¿Por qué elegirnos?</h3>
        <p className="text-sm text-gray-500 mt-2">Nuestra bodega ofrece productos seleccionados cuidadosamente.</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Leer Más</button>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it,idx) => (
            <div key={idx} className="border rounded p-4 text-left bg-white">
              <div className="font-semibold mb-2">{it.title}</div>
              <div className="text-sm text-gray-600">{it.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
