import { LegacyRef, useState } from 'react';
import './App.css';
import { useInnerMove } from 'smede-hooks';

function App() {
  const [ position, setPosition ] = useState({ x: 0, y: 0});
  const { ref, isActived } = useInnerMove(setPosition);

  return (
    <div className="App">
      <div
        className='canvas'
        style={{width: 500, height: 300, backgroundColor: '#a1a2a3', position: 'relative'}}
        ref={ref as LegacyRef<HTMLDivElement>}
      >
        <div
          className='thumb'
          style={{width: 16, height: 16, backgroundColor: isActived ? 'red' : '#112233', position: 'absolute', left: `calc(${position.x*100}% - 8px)`, top: `calc(${position.y*100}% - 8px)`}}
        ></div>
      </div>
    </div>
  );
}

export default App;
