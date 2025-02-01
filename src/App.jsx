import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Cards from './components/Cards'
import Scores from './components/Scores'

function App() {
  

  return (
    <div className='app'>
      <Title />
      <Cards />
      <Scores />
    </div>
  )
}

export default App
