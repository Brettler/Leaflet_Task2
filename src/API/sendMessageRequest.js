async function sendMessageRequest(chatId, msg) {
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
        return message;
    } else {
        throw new Error('Failed to send message');
    }
}
export default sendMessageRequest;


/* Example of what the function return when we send message into chatID = 15:
{
  "id": 71,
  "created": "2023-06-10T12:56:23.9837904+03:00",
  "sender": {
    "username": "LiadLIADLLIADLADI",
    "displayName": "LIADLIADLIAD",
    "profilePic": "jesus.png"
  },
  "content": "SECOND Hello it is the first message"
}
 */