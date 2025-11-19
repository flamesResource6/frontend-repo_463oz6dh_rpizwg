import React from 'react'
import HeroCover from './HeroCover'

function HomeScreen({ dark, onStart }) {
  return (
    <div className="relative h-full overflow-y-auto pb-20">
      <HeroCover />
      <div className={`px-5 py-5 ${dark ? 'bg-[#0b1220] text-white' : 'bg-white text-slate-900'}`}>
        <div className="space-y-6">
          <div className="rounded-2xl p-5 bg-gradient-to-br from-emerald-400/20 via-sky-400/10 to-transparent border border-emerald-500/20">
            <h2 className="text-xl font-semibold mb-1">Gentle relief, anytime</h2>
            <p className={`${dark ? 'text-slate-300' : 'text-slate-600'} text-sm`}>Soothing sound therapy designed to help you manage tinnitus with ease.</p>
            <button onClick={onStart} className="mt-4 w-full rounded-xl bg-emerald-500 text-white py-3 font-medium shadow-lg shadow-emerald-500/30 active:scale-[0.99] transition">Start Relief Session</button>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Recommended routines</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Morning Calm', time: '10 min', gradient: 'from-sky-200 to-emerald-200' },
                { title: 'Focus Drift', time: '15 min', gradient: 'from-emerald-200 to-teal-200' },
                { title: 'Evening Ease', time: '12 min', gradient: 'from-blue-200 to-sky-200' },
                { title: 'Night Soft', time: '20 min', gradient: 'from-slate-200 to-blue-200' },
              ].map((r, i) => (
                <div key={i} className={`rounded-2xl p-4 bg-gradient-to-br ${r.gradient}`}>
                  <p className="text-sm text-slate-700">{r.time}</p>
                  <p className="font-semibold">{r.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Today</h3>
            <div className={`rounded-2xl p-4 ${dark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <div className="flex items-center justify-between">
                <p className={`${dark ? 'text-slate-300' : 'text-slate-600'} text-sm`}>Daily progress</p>
                <p className="text-sm font-medium">3/5</p>
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full w-3/5 bg-gradient-to-r from-emerald-400 to-sky-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
