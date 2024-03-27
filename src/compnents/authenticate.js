import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth , googleProvider} from '../config/firebase';

function SignIn() {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 alert(auth?.currentUser?.displayName)

 const handleSignIn = () =>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userFile) => {
     const user = userFile.user;
     console.log("User signed in:", user)
  }).catch(err => {
    const errorMessage = err.message;
    console.error("Sign in error:", errorMessage)
  })
  
 }
 const handleSignInGoogle = async ()=>{
    try{
      await signInWithPopup(auth, googleProvider)
    }catch(err){
      console.error(err)
    }
 }
 const logOut = ()=>{
  signOut(auth)
 }

  return (
    <div>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignInGoogle}>Sign In With Google</button>
      <button onClick={logOut}>Logout</button>
    </div>
 
  );
}

export default SignIn;
