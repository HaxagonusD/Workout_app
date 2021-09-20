//import dependenies 
import {app, auth, db} from "./firebaseSetUp"
import { collection, addDoc } from "firebase/firestore";

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

  const addTestDocument = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const [user] = useAuthState(auth)
  return (
    <div>
     
     { user ? <Workout/>: <SignIn/>}
     <button onClick={addTestDocument}>Add Test Document </button>
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