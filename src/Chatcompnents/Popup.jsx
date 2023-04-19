import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import './popup.css';
import moment from "moment";
import Message from './Message/Message';

const PopUP = (props) => {
  // const [open, setOpen] = React.useState(false);
  const initialmsg = [
    "hello",
   "how can I help you" ,
   "Please select your issue"]

  const [index, setIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);
  const suggestions = ["Software issue","Hardware issue", "other issue"]; // array to hold suggestions
  // const [inputValue, setInputValue] = useState("");
  // const [isOpen, setIsOpen] = useState(true);
  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  }
  useEffect(() => {
    if (index < initialmsg.length) {
    const words = initialmsg[index].split(' ');
    let i = 0;
    const timer = setInterval(() => {
    if (i < words.length) {
    console.log(words[i]);
    i++;
    setTimeoutId(timer);
    } else {
    clearInterval(timeoutId);
    setIndex(index + 1);
    }
    }, 500);
    return () => clearInterval(timeoutId);
    }
    }, [index, messages]);
    const handleClearTimeout = () =>{
      clearInterval(timeoutId);
    }
  const responses = {
    'hello': 'how can I help you',
    'how can I help you ': " problems ",
    'thanks':"your welcome ",
    'software issue' :" you have selected software Issue",
    'hardware issue' :" you have selected hardware Issue",
    'other issue' : " you have selected other Issue"
    };
  
console.log(responses.hello);

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, {text: input, sender: 'user' }]);
    const response = responses[input.toLowerCase()];
    if (response){
      setTimeout(()=>{
        setMessages([...messages,{text:response, sender:'bot'}]);
      },2000);
    }    
    setInput('');
  };
  
 
  return (

    <div className='ytttttt' style={{ justifyContent: "end" }}>
      <Dialog
        className="chatDialogBox"
        // style={{justifyContent:"end"}}

        open={props.flag}
        onClose={props.handleCallBack}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"HCLTech Onboarding Support "}
          <IconButton
            aria-label="close"
            onClick={props.handleCallBack }
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContentText classname='text'>
          <b className='dialoghead2' >This is offline chat</b>

        </DialogContentText>
        <DialogContent  className='upperdiv'>
          <DialogContentText >
            <b className='time' >{moment().format('llll')}</b>

          </DialogContentText>
          <div>
          {/* <Message message={'hello !'}/>
          <Message message={"how can I help you"}/>
          <Message message={'Please select your issue '}/> */}
<div>
{initialmsg.slice(0, index).map((message, i) => (
<p key={i}> <Message message={message}/></p>
))}
</div>

        
         {messages.map((message,index) =>(
          <div key ={index} className={`message ${message.sender}`}>
            <Message message={message.text}/>
            </div>
             ))}
             {/* <form onSubmit = { handleMessageSubmit} className ="input-form">
              <input 
              type = "text"
              value = {input}
              onChange = {(event)=> setInput(event.target.value)}
              placeholder='Type a message'/>
              <button type = 'submit'>send</button>
              </form> */}
             </div>
    
          {/* <pre><AccountCircleIcon /> <b>Hi there!</b>
            <br />    <b>How may i help you</b>

          </pre> */}
         
          {/* {
            messages.map((item,i)=><Message message={item}/>)
          } */}
          {/* <Message message={messages}/> */}
         

        </DialogContent>
        <DialogContent>
          <div>
            {/* <input type ="text" value ={inputValue} onClick = {(e) =>setInput(e.target.value)}/> */}
            {
              suggestions.map((suggestion) =>(
                <button onClick={()=>handleSuggestionClick(suggestion)} className='suggestionbtn'>{suggestion}</button>
              ))
            }
          </div>
        </DialogContent>
        <DialogActions onSubmit = { handleMessageSubmit} className='bottomdiv' >
        <form onSubmit = { handleMessageSubmit} className ="input-form">
          <TextField id="outlined-basic" label="Type your queries" variant="outlined" 
           value = {input}
           onChange = {(event)=> setInput(event.target.value)}/>
          
          <Button type = 'submit' className="button" >Send</Button>
          </form>
        </DialogActions>
      
        <DialogContentText classname='text'>
          <h6 className='bottomtext' >Powered by HCLTech</h6>

        </DialogContentText>
      </Dialog>
    </div>


  );
}
export default PopUP;
