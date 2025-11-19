import React from 'react'
import { Moon, Sun } from 'lucide-react'

function TopBar({ dark, onToggleTheme }) {
  return (
    <div className={`px-5 py-4 flex items-center justify-between ${dark ? 'bg-[#0b1220]' : 'bg-white'}`}>
      <div className="flex items-center gap-2">
        <div className={`w-8 h-8 rounded-xl grid place-items-center ${dark ? 'bg-white/10' : 'bg-emerald-100'}`}>
          <span className="text-emerald-600 font-bold">Q</span>
        </div>
        <div>
          <p className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-500'}`}>Welcome</p>
          <h1 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>QuietMind</h1>
        </div>
      </div>
      <button aria-label="Toggle theme" onClick={onToggleTheme} className={`w-10 h-10 rounded-xl grid place-items-center transition ${dark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'}`}>
        {dark ? <Sun size={18}/> : <Moon size={18}/>}    
      </button>
    </div>
  )
}

export default TopBar
