
import React, { useState } from "react"
import "./Modal.css"
// function Messages() {
//     const data1 = [
//         {
//             "id":1,
//             "msg": "Hi"
//         },
//         {
//             "id":2,
//             "msg": "How may I help you"
//         },
//         {
//             "id":3,
//             "msg": "Please select a option below to proceed ahead with your query"
//         },

//     ]
//     const listItems = data1.map(
//         (element) => {
//                 return (
//                      <p className="msg1" key={element.id}>{element.msg}</p>                   
                
//             )
//         }
//     )


//     return (
//         <div>
//             {listItems}
//         </div>
//     )
// } RenderingArrayOfObjects


function Messages() {
    const data = [
        {
            "id": 1,
            "query": "IT support",
            "msg": "Please contact IT team"
        },
        {
            "id": 2,
            "query": "Laptop related issues",
            "msg": "Raise a ticket in service exchange"
        },
        {
            "id": 3,
            "query": "HR related issues",
            "msg": "Please raise a ticket in SSD"
        },
        {
            "id": 4,
            "query": "Domain change",
            "msg": "Please contact with RM"
        },
        {
            "id": 5,
            "query": "Other issues",
            "msg": "HCL"
        }
    ]
    const [button, setButton] = useState();
    const [msg1, setMsg] = useState();


    const handleMessage = (value) => {
        setButton(value);
        const res = data.map((element1) => {
            if (element1.query === value) {
                setMsg(element1.msg)
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



    return (
        <div>
            <div >
                <div>{button}</div>
                <div >{msg1}</div>
            </div>
            <div className="div5">{listItems}</div>
        </div>
    )
}

export default Messages;