import React from 'react'
import {Game} from './oxo/Game'
import './App.css'
import './oxo/Game.css'
import './component/MyInput'
import {MyInput} from './component/MyInput'
import {MyState} from './component/MyState'

const App: React.FC = () => {
  return (
    <div className="App">
      <Game/>
      <MyInput/>
      <MyState/>
    </div>
  )
}

export default App
