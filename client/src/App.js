import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Products from './components/Products'

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Home />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </div>
    </div>
  )
}

export default App
