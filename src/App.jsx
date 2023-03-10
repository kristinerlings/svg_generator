import { useState } from 'react'
/* import reactLogo from './assets/react.svg' */
import './App.css'
import Settings from './components/Settings';
import SvgDrawing from './components/SvgDrawing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className='container'>
        <SvgDrawing />
        <Settings />
      </div>
    </div>
  )
}

export default App
