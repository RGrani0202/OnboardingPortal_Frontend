import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import './popup.css';
import moment from "moment";

const PopUP=(props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log(props);

  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    
<div style={{justifyContent: "end"}}>
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
          onClick={props.handleCallBack}
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
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                   <b className='time' >{moment().format('llll')}</b>

                </DialogContentText>
                
                <pre><AccountCircleIcon /> <b>Hi there!</b> 
                <br />    <b>How may i help you</b>

                </pre>
                
              </DialogContent>
              <DialogActions>
              <TextField id="outlined-basic" label="" variant="outlined" />
                <Button id="#" onClick={props.handleCallBack}>Send</Button>
              </DialogActions>
            </Dialog>
            </div>

  
  );
}
export default PopUP;
