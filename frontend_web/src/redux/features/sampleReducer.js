const sampleReducer = (state = { sample: true }, action) =>{
    if(action.type === "sample/switch"){
        return state = {...state, sample: !state.sample}
    } else {
        return state 
    }
}

export default sampleReducer;