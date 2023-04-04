import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReadText } from './components/ReadText';
import { CounterApp } from './components/counterApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterApp/>
    <ReadText/>
  </React.StrictMode>
)
