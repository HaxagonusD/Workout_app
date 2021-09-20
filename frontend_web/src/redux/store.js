import { createStore, combineReducers } from "redux"
import sampleReducer  from "./features/sampleReducer"

// const store = createStore(combineReducers({sampleReducer}),undefined,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(
    combineReducers({sample: sampleReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store; 
