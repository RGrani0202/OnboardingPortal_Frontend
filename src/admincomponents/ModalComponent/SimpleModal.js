import React from "react";
//import { makeStyles } from '@material-ui/core/styles';

import {Modal} from "@mui/material";
import {Button} from "@mui/material";
import './Modal.css';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { IconButton } from "@mui/material";

function rand() {

    return Math.round(Math.random() * 20) - 10;

}

function getModalStyle() {

    const top = 50 + rand();

    const left = 50 + rand();

    return {

        top: `${top}%`,

        left: `${left}%`,

        transform: `translate(-${top}%, -${left}%)`,

    };

}
export default function SimpleModal() {

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    const dtm = weekday[d.getDay()];;
    const dt = month[d.getMonth()];

    const date = d.getDate();

    const year = d.getFullYear();

    const hour = d.getHours();

    const min = d.getMinutes();

    const item1 = [

        {

            id: "1",

            msg: "Laptop Related Issues",

        }

    ];

    //const classes = useStyles();

    const [list, setList] = React.useState(item1);

    const [msg, setName] = React.useState("");

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {

        setOpen(true);

    };

    const handleClose = () => {

        setOpen(false);

    };

    const handleChange = (event) => {

        setName(event.target.value);

    }

    const handleMessage = (event) => {

        event.preventDefault();

        const x = item1.concat({ msg, id: uuidv4() });

        setList(x);

        setName('');
    };
    console.warn(item1.length);
    return (
        <div>
            <button  className="btn-header" onClick={handleOpen}>
               <label className="btn-label">Chat With Us</label> 
            </button>
            <Modal
                className="modal"
                open={open}
                onClose={()=>setOpen(true)}
            >
                <div className="paper">
                    <div className="div1">
                        <div>
                            <p className="p1">HCLTech Onboarding Support </p></div>
                        <div>
                            <button className="btn2" onClick={() => setOpen(false)}> X </button></div>
                    </div>
                    <div className="div2"><center><p className="p2">This is offline chat</p></center></div>
                    <center><p className="p3">
                        {dtm}, {dt} {date} {year} {hour}:{min}
                    </p></center>
                    <PersonPinIcon className="pic1" />
                    <span className="span1">Hi...</span><br></br>
                    <div className="div3"><span className="span2">How may I help you?</span><br></br></div>
                    <div className="div4"><span className="span3">Please select a option below to proceed ahead with your query</span></div>
                    <div className="div5">
                    
                    <input type="text"
                    className="input1"
                    value={msg}
                    placeholder="Enter your message"
                    onChange={handleChange} />
                    <button className="btn1" type="submit" onClick={handleMessage}>Send</button>
                    
                    </div>



                </div>

            </Modal>

        </div>

    );

}