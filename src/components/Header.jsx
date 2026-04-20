import React from 'react'
import { imgEllipse1 } from '../figmaAssets'

export default function Header(){
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 6h18M3 18h18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="text-lg font-bold">IntelliMarket</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden border">
          <img alt="avatar" src={imgEllipse1} className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  )
}
