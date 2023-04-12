import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";
import "./Contactus.css"

const Contactus = ()=>{
    const [open,setOpen]= useState(false)
    return(
    <div>
    <Button variant="outline"  onClick={()=>setOpen(true)}><label>Chat With Us</label> </Button>
 
    <Dialog  open={open} onClose={()=>setOpen(false)}  >
    <DialogActions className="divide">
    <DialogTitle>Contact us</DialogTitle>
    <Button onClick={()=>setOpen(false)}> x </Button>
    </DialogActions>
    <DialogTitle>Offline Chat........</DialogTitle>
    <DialogContent>
    <DialogContentText> Nice to meet you !!!!!</DialogContentText>
    </DialogContent>
    <DialogActions className="Actions">
    <input type="text" placeholder="Enter text Here"></input>
    <Button> SEND </Button>
    </DialogActions>
    
    </Dialog>
    </div>
    )
}
export default Contactus;