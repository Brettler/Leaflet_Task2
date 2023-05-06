import MessageIcons from "../messageIcons/MessageIcons";

function MessageBox() {
    return (
        <div className="chat_input_container">

            <MessageIcons/>
            <input type="text" className="form-control chat_input" placeholder="Type your message..." />
            <button className="btn btn-success send_button" type="submit">
                <i className="bi bi-arrow-right" />
            </button>
        </div>
    );
}

export default MessageBox;