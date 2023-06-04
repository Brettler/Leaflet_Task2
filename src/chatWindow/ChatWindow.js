/* Implements the chat history and its display for the current user and the selected friend chat. */
import { useEffect, useRef } from "react";

function ChatWindow({currentFriend, chatHistory}) {

    const messagesEndRef = useRef(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatHistory]);


    // Check that the current friend is not null.
    // the current friend wont be null when the user will add friends and the click on one of them.
    if (!currentFriend) {
        return (
            <div className="chat_box">
                <div className="message_container"></div>
            </div>
        );
    }
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
                            {new Date(message.created).toLocaleString([], {hour: '2-digit', minute:'2-digit'})}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
}

export default ChatWindow;
