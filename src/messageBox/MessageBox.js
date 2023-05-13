import MessageIcons from "../messageIcons/MessageIcons";
import {useState} from 'react';

/* Here, the message box is managed. If the user hasn't selected a friend or hasn't entered any message, they won't be
* able to send a message. Otherwise, the user can send a message, and it will be displayed with a timestamp indicating
* when it was sent. */
function MessageBox({userInfo, currentFriend, handleNewMessage}) {
    const [messageText, setMessageText] = useState('')
    const friendInfo = userInfo.friendsList.find(friend => friend.registerUsername === currentFriend);

    // Check if either the message box is empty or a friend has not been selected.
    const handleSubmit = () => {
        if (!messageText || !friendInfo) {
            return;
        }
        //const now = new Date();
        //const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newMessage = {
            sender: userInfo.registerUsername,
            text: messageText,
            time: new Date().toLocaleString([], {hour: '2-digit', minute: '2-digit'}),
        };

        // Clear the message box once a message has been sent.
        handleNewMessage(newMessage);
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