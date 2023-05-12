
function ChatWindow({currentFriend, userInfo}) {
    const messages = userInfo.chatHistory[currentFriend] || [];
    return (
        <div className="chat_box">
            {/* Message container */}
            <div className="message_container">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender === userInfo.registerUsername ? 'my_message' : 'friend_message'}`}>
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