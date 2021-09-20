import { GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { auth } from "../firebaseSetUp"

const SignIn = ()=>{
    const signInWithGoogle = () =>{
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
    
    
     return <div>
         <button onClick={signInWithGoogle}>Sign in with google </button>

     </div>
}
export default SignIn;