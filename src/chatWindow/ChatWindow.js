/* Implements the chat history and its display for the current user and the selected friend chat. */
function ChatWindow({currentFriend, userInfo}) {
    const messages = userInfo.chatHistory[currentFriend] || [];

    // Chat box structure.
    return (
        <div className="chat_box">
            <div className="message_container">
                {messages.map((message, index) => (
                    <div key={index}
                         className={`message ${message.sender === userInfo.registerUsername ? 'my_message' : 'friend_message'}`}>
                        {message.text}
                        <div className="message_time">
                            {message.time}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatWindow;