import React from "react";
import { useState } from "react";
import { Modal } from "@mui/material";
import './Modal.css';

export default function SimpleModal() {
    const data = [
        {
            "id": 1,
            "query": "IT Support",
            "msg": "Please contact IT team"
        },
        {
            "id": 2,
            "query": "Laptop Related Issues",
            "msg": "please raise a ticket under: MyHcl->ServiceXchange - download "
        },
        {
            "id": 3,
            "query": "HR Related Issues",
            "msg": "Please raise a ticket under: MyHcl-> SSD"
        },
        {
            "id": 4,
            "query": "Domain Change",
            "msg": "Please connect with your RM"
        },
        {
            "id": 5,
            "query": "Tools Installation",
            "msg": "please raise a ticket under: MyHcl->tarmac - download software/Tool, MyHcl->service Xchange->install software - installation"
        },
        {
            "id": 6,
            "query": "Other Issues",
            "msg": "Please enter your query"
        }
    ]
    const msgs = [
        {
            "id": 1,
            "msg": "Hi"
        },
        {
            "id": 2,
            "msg": "How may I help you?"
        },
        {
            "id": 3,
            "msg": "Please select one of the below option to proceed ahead with your query."
        }
    ]
    const [open, setOpen] = useState(false);
    const [prevmsg, setprevmsg] = useState();
    const [curmsg, setcurrmsg] = useState();
    const [mssg, setMessage] = useState();
    const [button, setButton] = useState();
    const [msg1, setMsg] = useState();
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date();
    const dtm = weekday[d.getDay()];
    const dt = month[d.getMonth()];
    const date = d.getDate();
    const year = d.getFullYear();
    const timeFormate = new Date()
    const handleMessage = (value) => {
        setButton(value);
        const res = data.map((element1) => {
            if (element1.query === value) {
                setTimeout(() => { setMsg(element1.msg) }, 1000);
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


//     setTimeout(() => {
//         setMsg2("hi")
//     }, 1000)
//     setTimeout(() => {
//         setMsg3("How can I help you")
//     }, 2000)
//     setTimeout(() => {
//         setMsg4("Please select a option below to proceed ahead with your query")
//     }, 3000)
// };


const handleOpen = () => {
    setOpen(true);
    const messages = msgs.map(
        (element1) => {
            setTimeout(() => {
                if (element1.id === 1)
                    setMessage(element1.msg)
            }, 1000);
            setTimeout(() => {
                if (element1.id === 2)
                    setprevmsg(element1.msg);
            }, 2000);
            setTimeout(() => {
                if (element1.id === 3)
                    setcurrmsg(element1.msg);
            }, 3000);
        })
};
return (
    <div className="popupbox">
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
                        <p className="p1">HCLTech Onboarding Support</p></div>
                    <div>
                        <button className="btn2" onClick={() => setOpen(false)}> X </button></div>
                </div>
                <div className="div2"><center><p className="p2">This is a Offline chat</p></center></div>
                <center><p className="p3">
                    {dtm}, {dt} {date} {year} {Time}
                </p></center>
                <div className="bodyChatbot">
                    <div>
                        <p className="p1">{mssg}</p>
                        <p className="p1">{prevmsg}</p>
                        <p className="p1">{curmsg}</p>
                    </div>
                    <div className="divbtn">
                        <p className="user" id="btn">{button}</p></div>
                    <p className="msg2 " id="user">{msg1}</p>
                </div>
                <div>
                    <hr />
                    <div className="div5">{listItems}</div>
                </div>
            </div>
        </Modal>
    </div>
);
}