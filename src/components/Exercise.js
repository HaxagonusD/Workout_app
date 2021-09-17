import "./Exercise.css"
import {useState} from 'react'

//components 
import SetRow from "./SetRow"


function Exercise(){
    const [allSets, setAllSets] = useState([])
    const addSomething = ()=>{
        setAllSets([...allSets, <SetRow key={allSets.length} setNumber={allSets.length+1}/> ])
    }
      
    return (
        <div>
            <div className="row1">
                <input placeholder="Name of exercise"></input>
            </div>
            <div className="row2">
                <h3 className="heading3">Set</h3>
                <h3 className="heading3">Weight</h3>
                <h3 className="heading3">Reps</h3>
            </div>
            {allSets}
            <button onClick={addSomething}>Add a Set</button>
             
        </div>
    )
}
export default Exercise