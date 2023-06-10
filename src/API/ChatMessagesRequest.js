async function ChatMessagesRequest(chatId) {
    // get token from local storage
    const userToken = localStorage.getItem('token');

    const response = await fetch(`api/Chats/${chatId}/Messages`, {
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

/* Example of what the function return when we send message into chatID = 15:
(it will return a list of all the messages in chat that his id is 15. The id that
return is the id of each message.
[
  {
    "id": 71,
    "created": "2023-06-10T12:56:23.9837904",
    "sender": {
      "username": "LiadLIADLLIADLADI"
    },
    "content": "SECOND Hello it is the first message"
  },
  {
    "id": 70,
    "created": "2023-06-10T12:38:43.2798468",
    "sender": {
      "username": "LiadLIADLLIADLADI"
    },
    "content": "Hello it is the first message"
  }
]
 */

