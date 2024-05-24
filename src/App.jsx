import React from 'react'
import Upload from './pages/Upload'
import { Route, Routes } from 'react-router-dom'
import Display from './pages/Display'

const App = () => {
  return (
    <>
    
      <Routes>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/' element={<Display/>}/>
      </Routes>
    
    </>
  )
}

export default App
