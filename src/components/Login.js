import React, { useState } from 'react';
import { Typography,Grid,Input,Button } from '@mui/joy';
import {auth} from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword} from "firebase/auth";
export default function Login() {
  
  const [email,setEmail]=useState('')
  const [pass,setpass]=useState('')
  
 const submit=async(e)=>{
  e.preventDefault()
  await signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
 }
   return (
   
   <Grid
   component="form"
    container
    spacing={2}
     borderRadius={10}
    bgcolor={"wheat"}
    sx={{
      maxWidth:500,
      padding:2,
      mx:0
    }}
  >
    <Grid xs={12} sx={{
      textAlign:"center"
    }}>
    <Typography level="h2"  color="purple">Sign In</Typography>
    </Grid>
    
 <Grid  xs={12}>
    <Input placeholder="Enter Email"  name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/> 
     
 </Grid>
 <Grid  xs={12}>
    <Input placeholder="Enter password"   name='password' value={pass} onChange={(e)=>setpass(e.target.value)} /> 
   
 </Grid>

    <Grid
     item xs={12} 
     sx={{
      textAlign:"center"
    }}>
       <Button onClick={submit} >Login</Button>
    </Grid>
    
</Grid> 
  )
}
