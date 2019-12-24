import React from 'react'
import {Game} from './oxo/Game'
import './App.css'
import './oxo/Game.css'
import './component/MyInput'
import {MyInput} from './component/MyInput'
import {MyState} from './component/MyState'
import logo from './logo.svg'


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{height: 200,width:200}}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Game/>
      <MyInput/>
      <MyState/>
    </div>
  )
}

export default App
