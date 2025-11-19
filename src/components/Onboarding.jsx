import React from 'react'

function Step({ title, desc }){
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  )
}

function Onboarding({ onDone, dark }){
  const [i, setI] = React.useState(0)
  const steps = [
    { title: 'Welcome to QuietMind', desc: 'Soothing sound therapy to gently ease tinnitus and help you focus.' },
    { title: 'Personalize your relief', desc: 'We’ll tune intensity and frequencies to your comfort.' },
    { title: 'Daily rhythm', desc: 'Short, consistent sessions work best. We’ll guide you.' },
  ]

  const next = () => {
    if(i < steps.length - 1) setI(i+1)
    else onDone()
  }

  return (
    <div className={`h-full ${dark ? 'bg-[#0b1220] text-white' : 'bg-white text-slate-900'} flex flex-col` }>
      <div className="flex-1 p-6 flex flex-col items-center justify-center text-center gap-6">
        <div className={`w-40 h-40 rounded-full ${dark ? 'bg-white/5' : 'bg-sky-100'} grid place-items-center` }>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400"/>
        </div>
        <Step title={steps[i].title} desc={steps[i].desc} />
        <div className="flex gap-2">
          {steps.map((_, idx)=> (
            <span key={idx} className={`h-2 w-2 rounded-full ${idx===i ? 'bg-emerald-500' : dark ? 'bg-white/20' : 'bg-slate-300'}`}></span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <button onClick={next} className="w-full rounded-xl bg-emerald-500 text-white py-3 font-medium active:scale-[0.99] transition">{i < steps.length - 1 ? 'Continue' : 'Get Started'}</button>
      </div>
    </div>
  )
}

export default Onboarding
