import './App.css';
import { useState } from 'react'
import BoxGenerator from './components/boxgen';
import BoxDisplay from './components/boxdisp';

function App() {

  const [boxes, setBoxes] = useState([]);
  const addBoxes = ({ color, size }) => {
    setBoxes((prev) => { return [...prev, { color, size }] })
  };

  return (
    <div className="App">
      <BoxGenerator addBoxes={addBoxes} boxes={boxes} />
      <BoxDisplay colorList={boxes} />
    </div>
  );
}

export default App;
