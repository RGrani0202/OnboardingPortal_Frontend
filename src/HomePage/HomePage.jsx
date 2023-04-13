import React from 'react'
import './homepage.css'
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom" ;
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';



function HomePage() {
    const navigate=useNavigate();
    const [click, setClick] = useState(false);
          
    const handleClick = () => setClick(!click);
    return (
        <div className='container format'>
             {/* <div class="vertical-center"> */}
             <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
   

              <Button align="center" className="SignupButton" variant="contained" onClick={() => navigate("/signup")}><span>SIGNUP</span></Button>
              
           <Button align="center" className="LoginButton" variant="contained" onClick={() => navigate("/login")}>LOGIN</Button>
           {/* </div> */}
           </Box>
            
        </div>
    
      )
}

export default HomePage