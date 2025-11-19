import React, { useState, useMemo } from 'react'
import { Pause, Play, Volume2, Clock } from 'lucide-react'

function Slider({ label, value, onChange, min=0, max=100, step=1 }){
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e=>onChange(Number(e.target.value))} className="w-full accent-emerald-500"/>
    </div>
  )
}

function TherapyScreen({ dark }) {
  const [playing, setPlaying] = useState(false)
  const [intensity, setIntensity] = useState(40)
  const [frequency, setFrequency] = useState(8)
  const [minutes, setMinutes] = useState(10)
  const [sound, setSound] = useState('White Noise')

  const sounds = ['White Noise','Ocean','Rain','Forest']

  // Simple canvas waveform animation
  const CanvasWave = useMemo(() => {
    return function Wave(){
      return (
        <div className={`relative h-28 rounded-2xl overflow-hidden ${dark ? 'bg-white/5' : 'bg-slate-100'}`}>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad" x1="0" x2="1">
                <stop offset="0%" stopColor="#34d399"/>
                <stop offset="100%" stopColor="#38bdf8"/>
              </linearGradient>
            </defs>
            <path d="M0 100 Q 50 120 100 100 T 200 100 T 300 100 T 400 100 T 500 100 T 600 100 T 700 100 T 800 100" fill="none" stroke="url(#grad)" strokeWidth="6">
              <animate attributeName="d" dur="3s" repeatCount="indefinite" values="M0 100 Q 50 80 100 100 T 200 100 T 300 100 T 400 100 T 500 100 T 600 100 T 700 100 T 800 100; M0 100 Q 50 120 100 100 T 200 100 T 300 100 T 400 100 T 500 100 T 600 100 T 700 100 T 800 100; M0 100 Q 50 80 100 100 T 200 100 T 300 100 T 400 100 T 500 100 T 600 100 T 700 100 T 800 100"/>
            </path>
          </svg>
        </div>
      )
    }
  }, [dark])

  return (
    <div className={`h-full overflow-y-auto pb-24 ${dark ? 'bg-[#0b1220] text-white' : 'bg-white text-slate-900'}`}>
      <div className="px-5 py-5 space-y-6">
        <div className="rounded-2xl p-4 border border-emerald-500/20 bg-gradient-to-br from-emerald-400/10 to-sky-400/10">
          <CanvasWave />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {sounds.map(s => (
              <button key={s} onClick={() => setSound(s)} className={`rounded-xl py-2 text-sm ${sound===s ? 'bg-emerald-500 text-white' : dark ? 'bg-white/5 text-slate-200' : 'bg-slate-100 text-slate-700'}`}>{s}</button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <Slider label="Intensity" value={intensity} onChange={setIntensity} />
          <Slider label="Frequency" value={frequency} onChange={setFrequency} min={1} max={12} />
          <div className="grid grid-cols-3 gap-3">
            {[5,10,15].map(m => (
              <button key={m} onClick={() => setMinutes(m)} className={`rounded-xl py-2 text-sm ${minutes===m ? 'bg-emerald-500 text-white' : dark ? 'bg-white/5 text-slate-200' : 'bg-slate-100 text-slate-700'}`}>
                <div className="flex items-center justify-center gap-2"><Clock size={16}/> {m}m</div>
              </button>
            ))}
          </div>
        </div>

        <button onClick={() => setPlaying(p=>!p)} className="w-full rounded-xl py-3 font-medium bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 active:scale-[0.99] transition flex items-center justify-center gap-2">
          {playing ? <Pause size={18}/> : <Play size={18}/>} {playing ? 'Pause' : 'Start'} Session
        </button>
        <div className={`flex items-center justify-center gap-2 text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          <Volume2 size={16}/> {sound} • {minutes} min
        </div>
      </div>
    </div>
  )
}

export default TherapyScreen
