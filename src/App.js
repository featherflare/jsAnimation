import { Link, BrowserRouter, Routes, Route, Redirect } from 'react-router-dom'
import './App.css'
import CardRevealOnHover from './component/CardRevealOnHover/CardRevealOnHover'

function App() {
  return (
    <div className='App'>
      <div className='Menu'>
        <Routes>
          <Route path='cardRevealOnHover' element={<CardRevealOnHover />} />
        </Routes>
      </div>
      <div className='Component'>
        <BrowserRouter>
          <Route path='/cardRevealOnHover'>
            <CardRevealOnHover />
          </Route>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
