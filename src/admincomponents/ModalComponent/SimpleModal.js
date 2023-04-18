import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { Modal } from "@mui/material";
//import { Button } from "@mui/material";
import './Modal.css';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Messages from "./Messages";
export default function SimpleModal() {
    const data = [
        {
            "id": 1,
            "query": "IT support",
            "msg": "Please contact IT team"
        },
        {
            "id": 2,
            "query": "Laptop related issues",
            "msg": "please raise a ticket under: MyHcl->ServiceXchange - download "
        },
        {
            "id": 3,
            "query": "HR related issues",
            "msg": "Please raise a ticket under: MyHcl-> SSD"
        },
        {
            "id": 4,
            "query": "Domain change",
            "msg": "Please contact with RM"
        },
        {
            "id": 5,
            "query": "Software/tools installation",
            "msg": "please raise a ticket under: MyHcl->tarmac - download software/Tool, MyHcl->service Xchange->install software - installation"
        },
        {
            "id": 6,
            "query": "Other issues",
            "msg": "HCL"
        }
    ]
    const [button, setButton] = useState();
    const [msg1, setMsg] = useState();

    const weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date();
    const dtm = weekday[d.getDay()];;
    const dt = month[d.getMonth()];

    const date = d.getDate();

    const year = d.getFullYear();
    const timeFormate = new Date()

    const handleMessage = (value) => {
        setButton(value);
        const res = data.map((element1) => {
            if (element1.query === value) {
                setMsg(element1.msg)
                console.log(msg1);
            }
        })
        
    }
    
    const listItems = data.map(
        (element) => {
            return (
                <button value={element.query} className="btn" key={element.id} onClick={() => handleMessage(element.query)}>
                    {element.query}
                </button>
            )
        })


    
    const Time = timeFormate.toLocaleString([], {

        hour: 'numeric',

        minute: 'numeric',

        hour12: true

    })
    

    //  setTimeout(() => {
    //      console.log("Hi")
    //  }, 2000)

    //  setTimeout(() => {
    //      console.log("Please select a option below to proceed ahead with your query")
    //  }, 4000)


    const [open, setOpen] = React.useState(false);
    //const [print,setPrint]=useState(false);

    const handleOpen = () => {

        setOpen(true);

        setTimeout(() => {
            document.getElementById('msg').innerHTML="hi";
         }, 1000)
         setTimeout(() => {
            document.getElementById('msg1').innerHTML="How can I help you";
         }, 2000)
         setTimeout(() => {
            document.getElementById('msg2').innerHTML="Please select a option below to proceed ahead with your query ";
         }, 3000)

        

    };
    // function displayButton(){
    //     document.getElementById("user").innerHTML={msg1};
    // }
    
    //     setTimeout(displayButton,1000);

    return (
        <div>
            <button className="btn-header" onClick={handleOpen}>
                <label className="btn-label">Chat With Us</label>
            </button>
            <Modal
                className="modal"
                open={open}
                onClose={() => setOpen(true)}
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
                        {dtm}, {dt} {date} {year} {/*{hour}:{min} */} {Time}
                    </p></center>
                    <div className="bodyChatbot">
                        <p id="msg" className="msg1"></p>
                        <p id="msg1" className="msg1"></p>
                        <p id="msg2" className="msg1"></p>
                       
                        <p className="user" id="btn">{button}</p>
                        <p className="msg2 " id="user">{msg1}</p>
                        
                        

                    </div>
                    
                    <div  >
                        <hr /> 
                        <div className="div5">{listItems}</div>
                    </div>



                </div>

            </Modal>

        </div>

    );

}