import React, { useState } from 'react';
import './Chatbot.css';

function Chatbox() {
const [message, setMessage] = useState('');
const [isOpen, setIsOpen] = useState(true);

const handleSend = () => {
// Handle sending message logic
console.log('Sending message:', message);
};

const handleClose = () => {
setIsOpen(false);
};

return (
    <body>
<div className={`chatbot-popup ${isOpen ? 'open' : 'closed'}`}>
<div className="chatbot-header">

<h2>Chatbot</h2>
<button className="close-btn" onClick={handleClose}>X</button>
</div>
<div className="chatbot-body">
<p id="black">Hi, how may I help you?</p>
</div>
<div className="chatbot-footer">
<input
type="text"
value={message}
onChange={(e) => setMessage(e.target.value)}
placeholder="Type a message..."
/>
<button onClick={handleSend}>Send</button>
</div>
</div>
</body>
);
}

export default Chatbox;