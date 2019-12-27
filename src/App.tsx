import React from 'react'
import {Game} from './oxo/Game'
import './App.css'
import './oxo/Game.css'
import './component/MyInput'
import {MyInput} from './component/MyInput'
import {MyState} from './component/MyState'
// import logo from './logo.svg'
import {Table} from './feature/Table'
import {TableFragment} from './feature/TableFragment'
import {CatComponent} from './feature/DefaultCat'
import {NameForm} from './feature/NameForm'

const App: React.FC = () => {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" style={{height: 200,width:200}}/>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <MyInput/>
      <MyState/>
      <Game/>
      <Table/>
      <TableFragment/>
      <CatComponent catName={'haha'}/>
      <NameForm/>
    </div>
  )
}

export default App
