import { useState } from "react"
//components 
import Exercise from "./Exercise"


function Workout(){
    const [exercises, setExercises] = useState([])
    const addExercise = ()=>{
        setExercises([...exercises, <Exercise key={exercises.length}/>])
        console.log(exercises)
    }

    return (<div>
        <h1>Template #1</h1>
        {exercises}
        <button onClick={addExercise}>Add exercise</button>
    </div>)
}
export default Workout