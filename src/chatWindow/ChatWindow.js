/* Implements the chat history and its display for the current user and the selected friend chat. */
function ChatWindow({currentFriend, chatHistory}) {
    const messages = chatHistory[currentFriend.id] || [];

    // Chat box structure.
    return (
        <div className="chat_box">
            <div className="message_container">
                {messages.map((message, index) => (
                    <div key={index}
                         className={`message ${message.sender.username === currentFriend.user.username ? 'my_message' : 'friend_message'}`}>
                        {message.content}
                        <div className="message_time">
                            {new Date(message.created).toLocaleString()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatWindow;
