import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Addpage from './pages/Addpage'
import Editpage from './pages/Editpage'

function App() {
  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <nav>
          <div>
            <Link to={'/'} style={{ textDecoration: 'none' }}><h1>Employee Details</h1></Link>
          </div>
        </nav>
      </div>

      <div>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/create' element={<Addpage />} />
          <Route path='/edit' element={<Editpage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App