// import React from "react";

// const input = ()=>{
//     const data = [
//         {
//             "id": 1,
//             "query": "IT Support",
//             "msg": "Please contact IT team"
//         },
//         {
//             "id": 2,
//             "query": "Laptop Related Issues",
//             "msg": "please raise a ticket under: MyHcl->ServiceXchange - download "
//         },
//         {
//             "id": 3,
//             "query": "HR Related Issues",
//             "msg": "Please raise a ticket under: MyHcl-> SSD"
//         },
//         {
//             "id": 4,
//             "query": "Domain Change",
//             "msg": "Please connect with your RM"
//         },
//         {
//             "id": 5,
//             "query": "Tools Installation",
//             "msg": "please raise a ticket under: MyHcl->tarmac - download software/Tool, MyHcl->service Xchange->install software - installation"
//         },
//         {
//             "id": 6,
//             "query": "Other Issues",
//             "msg": "Please enter your query"
//         }
//     ]
//     const [button, setButton] = useState();
//     const [msg1, setMsg] = useState();
//     const [opt1,setOpt1]=useState([]);
//     const [inp, setInp] = useState([]);
//     const handleMessage = (value) => {
//         setButton(value);
//         const res = data.map((element1) => {
//             if (element1.query === value) {
//                 setTimeout(() => { setMsg(element1.msg) }, 1000);
//             }
//         })
//         setTimeout(() => {
//             setInp(()=>{
//                 return(
//                     <div>
//                     {console.log("Display")}
//                     <input className="input1" input="text"placeholder=" Enter your message" ></input>
//                     <button className="send-btn">Send</button>
//                     </div>
//                 )
//             })
            
//         },1500); 
        
        
//     }
    
//     const listItems = data.map(
//         (element) => {
//             return (
            
//                 <button value={element.query} className="btn" key={element.id} onClick={() => handleMessage(element.query)}>
//                 {element.query}
//                 </button>
                 
//             )
//         })
        
//         useEffect(() => {setTimeout(()=>{setOpt1(listItems)},7000)
//              }, []);




//     return(
//         <div>
//         <div className="div5">{opt1}</div>
//         <div>{inp}</div>
//         </div>
//     )
// export default input;