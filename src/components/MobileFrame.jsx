import React from 'react'

function MobileFrame({ dark, children }) {
  return (
    <div className={`min-h-screen w-full flex items-center justify-center ${dark ? 'bg-[#0b1220]' : 'bg-gradient-to-b from-sky-50 via-emerald-50 to-white'}`}>
      <div className={`relative w-[390px] h-[844px] rounded-[2rem] shadow-2xl overflow-hidden border ${dark ? 'border-white/10' : 'border-slate-200'} bg-white`}>
        {/* Status bar mock */}
        <div className={`absolute top-0 left-0 right-0 h-6 ${dark ? 'bg-[#0b1220]' : 'bg-white'} z-20`}/>
        {children}
      </div>
    </div>
  )
}

export default MobileFrame
