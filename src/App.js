import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import OnlineEditor from './components/OnlineEditor'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to Online Editor</h1>
        </header>
        <div className='App-intro'>
          <OnlineEditor />
        </div>
      </div>
    )
  }
}

export default App
