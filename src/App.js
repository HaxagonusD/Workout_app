import './App.css';
import Set from "./components/Set"
import { useState } from 'react';

function App() {
  const [allSets, setAllSets] = useState([<Set position={1}/>,<Set position={2}/>])
  const addSomething = ()=>{
    setAllSets([...allSets, <Set position={allSets.length+1}/> ])
  }
  return (
    <div>
      {allSets}
      <button onClick={addSomething}>Add something</button>
    </div>
    
  );
}

export default App;
//TODO
/**
 * Create the API 
 * Create the frontend components 
 * Create the server 
 * Find a hosting solution 
 * 
 * 
 * 
 * 
 */