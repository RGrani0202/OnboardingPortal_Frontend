import React from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import moment from 'moment';

const PopUp=(props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    // const handleClose = () => {
    //   setOpen(false);}
 return(
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
                {"This is Ofline Chat"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                   <b className='tttt' >{moment().format('llll')}</b>

                </DialogContentText>
                <h>
                  <b>Hi there!</b>
                  <br></br>
                 <b>How may i help you</b>
                </h>
              </DialogContent>
              <DialogActions>
                <Button id="sarbajeet" onClick={props.handleCallBack}>Close</Button>
              </DialogActions>
            </Dialog>
            </div>
 )
}
export default PopUp;