



function ChatWindow() {
    return (
        <div className="chat_box">
            {/* Message container */}
            <div className="message_container">
                {/* My message */}
                <div className="message my_message">
                    Hey man, when will you be coming back to Kattegat?
                    <div className="message_time">13:45</div>
                </div>
                {/* Friend message */}
                <div className="message friend_message">
                    You'll be seeing me soon enough
                    <div className="message_time">13:46</div>
                </div>
            </div>
            {/* Chat input and send button */}
            {/* <MessageBox/>*/}
        </div>
    );

}

export default ChatWindow;