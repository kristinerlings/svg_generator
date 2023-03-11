import { useState } from 'react'
import './App.css'
import Settings from './components/Settings';
import SvgDrawing from './components/SvgDrawing';

function App() {
  const [count, setCount] = useState(0);
  const [filterParams, setFilterParams] = useState({
    animation: false ,
    style: 'solid',
    distortion: 0,
  });

  return (
    <div className="app">
      <div className='container'>
        <SvgDrawing params={filterParams}/>
        <Settings params={filterParams} updateParams={setFilterParams} />
      </div>
    </div>
  )
}

export default App
