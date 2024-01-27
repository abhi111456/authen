import React, { useState } from 'react';
import { Typography,Grid,Input,Button } from '@mui/joy';
import {auth} from '../firebase/firebaseConfig';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
export default function LoginAndLogout() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [pass,setpass]=useState('')
  
 const submit=async(e)=>{
  e.preventDefault()
  await createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', pass);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
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
    <Typography level="h2"  color="purple">Sign Up</Typography>
    </Grid>
    <Grid xs={12}>
      <Input placeholder="Enter your Name"  name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
      
   </Grid>
    
 <Grid  xs={12}>
    <Input placeholder="Enter Email"  name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/> 
     
 </Grid>
 <Grid  xs={12}>
    <Input placeholder="Enter password"   name='password' value={pass} onChange={(e)=>setpass(e.target.value)} /> 
   
 </Grid>

    <Grid item xs={12} sx={{
      textAlign:"center"
    }}>
       <Button onClick={submit} >SignUp</Button>
    </Grid>
    <p>Alread have an account:-<Link to="/login">sign in</Link></p>
</Grid>

   
  )
}
