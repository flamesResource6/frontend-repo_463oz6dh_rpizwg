import React from 'react'

function Toggle({ label, checked, onChange }){
  return (
    <label className="flex items-center justify-between py-3">
      <span className="text-sm">{label}</span>
      <button onClick={()=>onChange(!checked)} className={`w-12 h-7 rounded-full p-1 transition ${checked ? 'bg-emerald-500' : 'bg-slate-300'}`}>
        <div className={`h-5 w-5 rounded-full bg-white transition ${checked ? 'translate-x-5' : ''}`}></div>
      </button>
    </label>
  )
}

function SettingsScreen({ dark }){
  const [notifications, setNotifications] = React.useState(true)
  const [nightMode, setNightMode] = React.useState(dark)

  return (
    <div className={`h-full overflow-y-auto pb-24 ${dark ? 'bg-[#0b1220] text-white' : 'bg-white text-slate-900'}`}>
      <div className="px-5 py-5 space-y-6">
        <div className={`rounded-2xl p-5 ${dark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
          <h3 className="font-semibold mb-3">Customize routines</h3>
          <div className="space-y-2">
            <Toggle label="Morning reminder" checked={notifications} onChange={setNotifications} />
            <Toggle label="Session end chime" checked={true} onChange={()=>{}} />
          </div>
        </div>

        <div className={`rounded-2xl p-5 ${dark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
          <h3 className="font-semibold mb-3">Hearing profile</h3>
          <div className="grid grid-cols-2 gap-3">
            {['Low','Mid','High','Ultra'].map((b,i)=>(
              <button key={i} className={`rounded-xl py-2 text-sm ${dark ? 'bg-white/10 text-slate-200' : 'bg-white text-slate-700'}`}>{b} frequency</button>
            ))}
          </div>
        </div>

        <div className={`rounded-2xl p-5 ${dark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
          <h3 className="font-semibold mb-3">Appearance</h3>
          <Toggle label="Dark mode" checked={nightMode} onChange={setNightMode} />
          <p className={`${dark ? 'text-slate-400' : 'text-slate-500'} text-xs`}>Use your device setting or toggle manually.</p>
        </div>
      </div>
    </div>
  )
}

export default SettingsScreen
