import React, { useState } from 'react';
import { Typography,Grid,Input,Button } from '@mui/joy';

import firebase from './firebaseConfig';
export default function Login() {
  
  const [email,setEmail]=useState('')
  const [pass,setpass]=useState('')
  
 const submit=async(e)=>{
  e.preventDefault()
  try{
    const user=await firebase.auth().signInWithEmailAndPassword(email,pass)
    if(user){
      alert("Login success")
      console.log(user);
    }
  }catch(error){
    alert(error)
  }

 }
  
  return (
   
   <Grid
    
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

    <Grid item xs={12} sx={{
      textAlign:"center"
    }}>
       <Button onClick={submit} >Login</Button>
    </Grid>
    
</Grid>

   
  )
}
