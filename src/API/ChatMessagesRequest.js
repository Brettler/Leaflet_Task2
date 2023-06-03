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
        return messages;
    } else {
        throw new Error('Failed to fetch messages');
    }
}

export default ChatMessagesRequest;
