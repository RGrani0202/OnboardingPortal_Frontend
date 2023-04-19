import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Message.css';
const Message = ({message}) => {
  return (
    <div>
        <AccountCircleIcon />
    
    <div className='messageBox' >
        
         {message}
        
    </div>
    </div>
  )
}

export default Message