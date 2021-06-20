import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('/')
      .then((res) => res.json())
      .then((data) => setData(data))
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{!data ? 'Loading...' : data}</div>
      </header>
    </div>
  )
}

export default App
