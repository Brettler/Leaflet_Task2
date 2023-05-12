import MessageIcons from "../messageIcons/MessageIcons";
import {useState} from 'react';

function MessageBox({userInfo, handleNewMessage}) {
    const [messageText, setMessageText] = useState('')

    const handleSubmit = () => {
        const newMessage = {
            sender: userInfo.registerUsername,
            text: messageText,
            time: new Date().toLocaleString(),
        };
        handleNewMessage(newMessage);
        setMessageText(''); // clear the message box
    };


    return (
        <div className="chat_input_container">
            <MessageIcons/>
            <input type="text" className="form-control chat_input" placeholder="Type your message..."
            value={messageText} onChange={(e)=> setMessageText(e.target.value)}/>
            <button className="btn btn-success send_button" type="submit" onClick={handleSubmit}>
                <i className="bi bi-arrow-right" />
            </button>
        </div>
    );
}

export default MessageBox;