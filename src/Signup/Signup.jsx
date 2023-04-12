import React, { useState } from 'react';

import "./Signup.css";

import Box from '@mui/material/Box';

import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';

import VisibilityOff from '@mui/icons-material/VisibilityOff';

import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';

import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';

import MailIcon from '@mui/icons-material/Mail';

import LockIcon from '@mui/icons-material/Lock';

import Button from '@mui/material/Button';

function Signup() {

const [username, setUsername] = useState('');

const [email, setEmail] = useState('');

const [password, setPassword] = useState('');

const [confirmpassword, setConfirmPassword] = useState('');

const [showPassword, setShowPassword] = useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {

event.preventDefault() };




const handleUsernameChange = (event) => {

setUsername(event.target.value);

};




const handleEmailChange = (event) => {

setEmail(event.target.value);

};




const handlePasswordChange = (event) => {

setPassword(event.target.value);

};




const handleConfirmPassword = (event) => {




 setConfirmPassword(event.target.value);



 };




const handleSubmit = (event) => {

event.preventDefault();

console.log('Submitted:', { username, email, password });




};




return (

<form onSubmit={handleSubmit}>

<div className="feilds">

 <FormControl className="size" variant="outlined">

 <InputLabel htmlFor="outlined-adornment-password">UserName</InputLabel>

<OutlinedInput

 size='outlinedInput'

id="outlined-adornment-password"

 startAdornment={

 <InputAdornment position="start">

 <MailIcon />

 </InputAdornment>

}

 label="username"

onChange={(event) => {

 setUsername(event.target.value);

}}

 />

</FormControl>

</div>

<div className="feilds">

 <FormControl className="size" variant="outlined">

 <InputLabel htmlFor="outlined-adornment-password">E-Mail</InputLabel>

<OutlinedInput

size='outlinedInput'

id="outlined-adornment-password"

startAdornment={

 <InputAdornment position="start">

 <MailIcon />

 </InputAdornment>

 }

 label="email"

 onChange={(event) => {

 setEmail(event.target.value);

 }}

 />

 </FormControl>

 </div>

 <div className="feilds" >

 <FormControl className="size" variant="outlined">

<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

 <OutlinedInput

id="outlined-adornment-password"

 type={showPassword ? 'text' : 'password'}

startAdornment={

 <InputAdornment position="start"> <LockIcon /></InputAdornment>

 }

 endAdornment={

 <InputAdornment position="end">

 <IconButton

 aria-label="toggle password visibility"

onClick={handleClickShowPassword}

onMouseDown={handleMouseDownPassword}

edge="end"

>

 {showPassword ? <VisibilityOff /> : <Visibility />}

</IconButton>

 </InputAdornment>

}

label="Password"

 onChange={(event) => {

 setPassword(event.target.value);

 }}

 />

 </FormControl>

</div>

 <div className="feilds" >

<FormControl className="size" variant="outlined">

 <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>

 <OutlinedInput

 id="outlined-adornment-password"

 type={showPassword ? 'text' : 'confirmpassword'}

 startAdornment={

 <InputAdornment position="start"> <LockIcon /></InputAdornment>

 }

 endAdornment={

 <InputAdornment position="end">

<IconButton

 aria-label="toggle password visibility"

 onClick={handleClickShowPassword}

 onMouseDown={handleMouseDownPassword}

 edge="end"

 >

 {showPassword ? <VisibilityOff /> : <Visibility />}

</IconButton>

 </InputAdornment>

 }

 label="ConfirmPassword"

 onChange={(event) => {

 setConfirmPassword(event.target.value);

 }}

 />

 </FormControl>

 </div>

 <div className="feilds">
        <Button className="size continue" variant="contained" onClick={(handleSubmit)} >Signup</Button><br></br>
        
      </div>
<div className="feilds">
        <Button className="size continue" variant="contained" onClick={()=>window.location.href ="./Login"} >Login</Button><br></br>
        
      </div>

</form>

);

}




export default Signup;