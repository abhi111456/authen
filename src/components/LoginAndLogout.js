import React, { useState } from 'react';
import { Typography,Grid,Input,Button } from '@mui/joy';

export default function LoginAndLogout() {
  const [user,Setuser]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:""

  })
  let name,value
  const data=(e)=>{
    name=e.target.name;
    value=e.target.value;
    Setuser({...user,[name]:value});
    console.log(user);

  }
 
  const getdata =async(e)=>{
    const {firstname,lastname,email,password,confirmpassword}=user;
    e.preventDefault();
    const option={
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        firstname,lastname,email,password,confirmpassword
      })
    }
    const res=await fetch('AIzaSyDI85GhOrxtSMnGXI9Syduz67ra4ApNKBA /UserData.json',
    option
    )
    if(res){
      alert("data sent");
    }else{
      alert("error");
    }
  }
  
  
  return (
    <form method='POST'>
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
    <Typography level="h2"  color="purple">Sign Up</Typography>
    </Grid>
    <Grid xs={6}>
      <Input placeholder="Enter First Name"  name='firstname' value={user.firstname} required onChange={data} />
      
   </Grid>
    <Grid  xs={6}>
      <Input placeholder="Enter Last Name"  name='lastname' value={user.lastname} required onChange={data}/> 
      
    </Grid>
 <Grid  xs={12}>
    <Input placeholder="Enter Email"  name='email'  value={user.email} required onChange={data}/> 
     
 </Grid>
 <Grid  xs={12}>
    <Input placeholder="Enter password"   name='password' value={user.password} required onChange={data}/> 
   
 </Grid>
 <Grid xs={12}>
    <Input placeholder="Confirm Password" name='confirmpassword' value={user.confirmpassword} required onChange={data} /> 
    
 </Grid>
    <Grid item xs={12}>
       <Button type='Submit' onClick={getdata}>SignUp</Button>
    </Grid>
</Grid>
</form>
   
  )
}
