async function sendMessageRequest(chatId, msg, socket) {
    // get token from local storage
    const userToken = localStorage.getItem('token');

    const response = await fetch(`api/Chats/${chatId}/Messages`, {
        'method': 'post',
        'headers': {
            'Content-Type': 'application/json',
            "authorization": 'Bearer ' + userToken,
        },
        'body': JSON.stringify({ msg: msg })
    });

    if (response.ok) {
        const message = await response.json();
        socket.emit("messageSent");
        console.log("Respond from the server after sending the message: ", message)
        return message;
    } else {
        throw new Error('Failed to send message');
    }
}
export default sendMessageRequest;