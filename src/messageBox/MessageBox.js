import MessageIcons from "../messageIcons/MessageIcons";
import {useState, useEffect} from 'react';
import sendMessageRequest from "../API/sendMessageRequest";


/* Here, the message box is managed. If the user hasn't selected a friend or hasn't entered any message, they won't be
* able to send a message. Otherwise, the user can send a message, and it will be displayed with a timestamp indicating
* when it was sent. */
function MessageBox({currentFriend,  setRefreshNeeded}) {
    const [messageText, setMessageText] = useState('')

    const handleSubmit = async () => {
        if (!messageText || !currentFriend) {
            return;
        }
        await sendMessageRequest(currentFriend.id, messageText);
        setRefreshNeeded(prevState => !prevState);
        setMessageText('');
    };

    // Message box structure.
    return (
        <div className="chat_input_container">
            <MessageIcons/>
            <input type="text" className="form-control chat_input" placeholder="Type your message..."
                   value={messageText} onChange={(e) => setMessageText(e.target.value)}/>
            <button id="send-message-btn" className="btn btn-success send_button" type="submit" onClick={handleSubmit}>
                <i className="bi bi-arrow-right"/>
            </button>
        </div>
    );
}

export default MessageBox;