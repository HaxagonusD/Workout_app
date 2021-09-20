//import dependenies 
import {app, auth} from "./firebaseSetUp"
//import hooks
import {useAuthState} from "react-firebase-hooks/auth"

//import styles
import './App.css';

//import componenets
import Workout from './components/Workout';
import SignIn from "./components/SignIn"


function App() {
  //user object
  //null if user is not signed in populated if user is signed in
  const [user] = useAuthState(auth)
  return (
    <div>
     
     { user ? <Workout/>: <SignIn/>}
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