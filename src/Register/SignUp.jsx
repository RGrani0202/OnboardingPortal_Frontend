import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
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
import axios from 'axios';
import "./SignUp.css";

const SignUp = () => {
  // const [get, setGet] = useState([{ message: "started" }]);
  const [postvalue, setPost] = useState();
  const [bool, setBool] = useState(false);
  const [incorrectData, setIncorrectData] = useState(false);
  const [userName, setUserName] = useState();
  const [newPassword, setPassword] = useState();
  const [emailId, setemailId] = useState();
  const [verifyPassword, setverifyPassword] = useState();
  const navigate = useNavigate("");
  const [showPassword, setShowPassword] = useState(false);
  let apikey = process.env.REACT_APP_POST_USER_SIGNUP;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (e) => {

    e.preventDefault();
    console.log("saved");
    try {
        //pass items to store in database
        axios.post(apikey, {
          userName: userName,
          email:emailId,
          password: newPassword,
          confirm_password:verifyPassword
        }
        , {
            headers: {
                "Content-Type": 'application/json'   
            }
        }
        ).then((response) => {
          console.log(response);
          setPost(response.data); 
        });

    } catch (err) {
        console.log(err);
    }
}


  useEffect(() => {
    console.log(postvalue);
    if (postvalue === "User login successfully") {
      console.log(postvalue);
      navigate("/login", {state:"signUp"});
      setBool(true);
    }
    else {
      console.log("wrong");
      setBool(false);
    }
  }, [postvalue])

 
  return (

    <div className="Register" align="centre">
    <h1> Sign Up</h1>
    <Box component="form" className="size"
      noValidate sx={{ '& > :not(style)': { m: 1 } }}>
        {incorrectData?<div className="incorrect">Incorrect credentials</div>:<div></div>}
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
            label="Password"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </FormControl>
      </div>
      <div className="feilds">
        <FormControl className="size" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">EmailId</InputLabel>
          <OutlinedInput
          size='outlinedInput'
            id="outlined-adornment-password"
            startAdornment={
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            }
            label="Password"
            onChange={(event) => {
              setemailId(event.target.value);
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
          <InputLabel htmlFor="outlined-adornment-password">Verify Password </InputLabel>
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
              setverifyPassword(event.target.value);
            }}
          />
        </FormControl>
      </div>
      <div className="feilds">
        <Button className="size continue" variant="contained"  onClick={handleSubmit} >SignUp</Button>
      </div>
    </Box>

  </div>

  );

}
export default SignUp;