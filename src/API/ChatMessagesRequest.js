async function ChatMessagesRequest(chatId) {
    // get token from local storage
    const userToken = localStorage.getItem('token');

    const response = await fetch(`http://localhost:5000/api/Chats/${chatId}/Messages`, {
        'method': 'get',
        'headers': {
            'Content-Type': 'application/json',
            "authorization": 'Bearer ' + userToken,
        }
    });

    if (response.ok) {
        const messages = await response.json();
        console.log("Respond from the server after sending the messages: ", messages)
        return messages;
    } else {
        throw new Error('Failed to fetch messages');
    }
}

export default ChatMessagesRequest;
