import React from 'react'
import {KnowledgeProvider} from './KnowledgeContext'
import Wisdom from './Wisdom'
import Toggle from './Toggle'
import './App.scss'

class App extends React.Component {
  render () {
    return (
      <KnowledgeProvider>
        <Wisdom />
        <Toggle />
      </KnowledgeProvider>
    )
  }
}

export default App
