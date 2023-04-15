import './Register.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
const Register = () => {
    const [postvalue, setPost] = useState();
    const [bool, setBool] = useState(false);
    const [incorrectData, setIncorrectData] = useState(false);
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [newPassword, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const navigate = useNavigate("");
    const [showPassword, setShowPassword] = useState(false);
    let apikey =process.env.REACT_APP_POST_USER_REGISTER;
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {

        event.preventDefault();

    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("saved");
        try {
            //pass items to store in database
            const response = await axios.post(apikey, {
                userName: userName,
                email: email,
                password: newPassword,
                confirm_password: confirmpassword
            }
               
            )
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="RegistrationPage" align="centre">
            <h4><center>Register</center></h4>
            <Box component="form" className="size"
                noValidate sx={{ '& > :not(style)': { m: -2} }}>
                {incorrectData ? <div className="incorrect">Incorrect credentials</div> : <div></div>}
                <div className="feilds">
                    <FormControl className="size" variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">UserName</InputLabel>
                        <OutlinedInput
                            size='outlinedInput'
                            id="outlined-adornment-password"
                            startAdornment={
                                <InputAdornment position="start">
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
                        <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
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
                                setConfirmpassword(event.target.value);
                            }}
                        />
                    </FormControl>
                </div>
                <div className="feilds">
                    <Button className="size continue" variant="contained" onClick={(handleSubmit)} >Register</Button>
                    <center><Button onClick={(handleSubmit)=>navigate("/login")}> If already have Sign in</Button></center>
                </div>
            </Box>
        </div>
    )
}
export default Register;