import { getAuth } from "@firebase/auth";


const auth = getAuth()

const SignOut = () =>{
    return auth.currentUser && (
        <button onClick={()=> auth.signOut()}>Sign out</button>
    )
}

export default SignOut;