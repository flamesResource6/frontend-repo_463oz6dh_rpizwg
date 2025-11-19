import React from 'react'

function ProgressScreen({ dark }) {
  const entries = [
    { day: 'Mon', value: 3 },
    { day: 'Tue', value: 4 },
    { day: 'Wed', value: 2 },
    { day: 'Thu', value: 5 },
    { day: 'Fri', value: 4 },
    { day: 'Sat', value: 3 },
    { day: 'Sun', value: 4 },
  ]

  return (
    <div className={`h-full overflow-y-auto pb-24 ${dark ? 'bg-[#0b1220] text-white' : 'bg-white text-slate-900'}`}>
      <div className="px-5 py-5 space-y-6">
        <div className="rounded-2xl p-5 border ${dark ? 'border-white/10' : 'border-slate-200'} bg-gradient-to-b from-transparent to-slate-50">
          <h2 className="text-xl font-semibold mb-2">Weekly improvement</h2>
          <p className={`${dark ? 'text-slate-300' : 'text-slate-600'} text-sm mb-4`}>Lower is better. Track how noticeable your tinnitus feels each day.</p>
          <div className="grid grid-cols-7 gap-2 items-end h-36">
            {entries.map((e,i)=> (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-7 bg-gradient-to-t from-emerald-400 to-sky-400 rounded-lg" style={{height: `${e.value*20}px`}}/>
                <span className={`text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{e.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-2xl p-5 ${dark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
          <h3 className="font-semibold mb-3">Mood tracking</h3>
          <div className="grid grid-cols-5 gap-2">
            {['🙂','😌','😐','😕','😣'].map((m,i)=> (
              <button key={i} className={`rounded-xl py-3 text-xl ${dark ? 'bg-white/10' : 'bg-white'} hover:scale-[0.99] transition`}>
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className={`rounded-2xl p-5 ${dark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
          <h3 className="font-semibold mb-3">Recent entries</h3>
          <div className="space-y-3">
            {[1,2,3].map(i => (
              <div key={i} className={`p-3 rounded-xl flex items-center justify-between ${dark ? 'bg-white/5' : 'bg-white'}`}>
                <div>
                  <p className="text-sm">Day {i}</p>
                  <p className={`${dark ? 'text-slate-400' : 'text-slate-500'} text-xs`}>Intensity 3/5 • 10m session</p>
                </div>
                <span className="text-lg">😌</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressScreen
