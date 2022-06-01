import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import CardRevealOnHover from './component/CardRevealOnHover/CardRevealOnHover'
import GlassCard from './component/GlassCard/GlassCard'
import ButtonAni from './component/Button/ButtonBorderMoving'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='Menu'>
          <div className='Link-list'>
            <Link className='Link' to='/'>
              Hello
            </Link>
          </div>
          <div className='Link-list'>
            <Link className='Link' to='/cardRevealOnHover'>
              CardRevealOnHover
            </Link>
          </div>
          <div className='Link-list'>
            <Link className='Link' to='/glassCard'>
              GlassCard
            </Link>
          </div>
          <div className='Link-list'>
            <Link className='Link' to='/buttonAni'>
              ButtonAni
            </Link>
          </div>
        </div>
        <div className='Component'>
          <Routes>
            <Route path='/cardRevealOnHover' element={<CardRevealOnHover />} />
            <Route path='/glassCard' element={<GlassCard />} />
            <Route path='/buttonANi' element={<ButtonAni />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
