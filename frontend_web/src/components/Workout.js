import { useState } from "react"
//components 
import Exercise from "./Exercise"
import SignOut from "./SignOut"
import {useSelector, useDispatch} from "react-redux"


function Workout(){
    const [exercises, setExercises] = useState([])
    const sample = useSelector((state) => {return state.sample.sample})
    const dispatch = useDispatch();
    const addExercise = ()=>{
        setExercises([...exercises, <Exercise key={exercises.length}/>])
        console.log(exercises)
    }

    const triggerSampleReducer = ()=>{
        console.log(sample + " <---- here is the sample")
        dispatch({type: "sample/switch"})
        
    }

    return (<div>
        <SignOut/>
        <button onClick={triggerSampleReducer}>Trigger Sample Reducer</button>
        <h1>Template #1</h1>
        {exercises}
        <button onClick={addExercise}>Add exercise</button>
    </div>)
}
export default Workout