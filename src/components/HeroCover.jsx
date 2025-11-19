import React from 'react'
import Spline from '@splinetool/react-spline'

function HeroCover() {
  return (
    <div className="relative h-56 w-full">
      <Spline scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1220]/30 to-[#0b1220]" />
    </div>
  )
}

export default HeroCover
