import React from 'react'
import { Home, Waves, BarChart3, Settings } from 'lucide-react'

function TabBar({ current, onChange, dark }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'therapy', label: 'Therapy', icon: Waves },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]
  return (
    <div className={`absolute bottom-0 left-0 right-0 ${dark ? 'bg-[#0b1220]/80 backdrop-blur' : 'bg-white/90 backdrop-blur'} border-t ${dark ? 'border-white/10' : 'border-slate-200'}`}>
      <div className="grid grid-cols-4">
        {tabs.map(t => {
          const Icon = t.icon
          const active = current === t.id
          return (
            <button key={t.id} onClick={() => onChange(t.id)} className={`py-3 flex flex-col items-center gap-1 ${active ? 'text-emerald-500' : dark ? 'text-slate-400' : 'text-slate-500'}`}>
              <Icon size={20}/>
              <span className="text-[11px]">{t.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default TabBar
