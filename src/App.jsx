import React from 'react'
import MobileFrame from './components/MobileFrame'
import TopBar from './components/TopBar'
import TabBar from './components/TabBar'
import HomeScreen from './components/HomeScreen'
import TherapyScreen from './components/TherapyScreen'
import ProgressScreen from './components/ProgressScreen'
import SettingsScreen from './components/SettingsScreen'
import Onboarding from './components/Onboarding'

function App() {
  const [tab, setTab] = React.useState('home')
  const [dark, setDark] = React.useState(false)
  const [onboarded, setOnboarded] = React.useState(false)

  return (
    <MobileFrame dark={dark}>
      {!onboarded ? (
        <Onboarding dark={dark} onDone={() => setOnboarded(true)} />
      ) : (
        <>
          <TopBar dark={dark} onToggleTheme={() => setDark(d=>!d)} />
          {tab === 'home' && <HomeScreen dark={dark} onStart={() => setTab('therapy')} />}
          {tab === 'therapy' && <TherapyScreen dark={dark} />}
          {tab === 'progress' && <ProgressScreen dark={dark} />}
          {tab === 'settings' && <SettingsScreen dark={dark} />}
          <TabBar dark={dark} current={tab} onChange={setTab} />
        </>
      )}
    </MobileFrame>
  )
}

export default App
