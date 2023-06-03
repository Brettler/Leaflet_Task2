//
// async function addFriendRequest(username) {
//     // get token from local storage
//     const userToken = localStorage.getItem('token');
//
//     const response = await fetch('http://localhost:5000/api/Chats', {
//         'method': 'post',
//         'headers': {
//             'Content-Type': 'application/json',
//             "authorization": 'Bearer ' + userToken,
//         },
//         'body': JSON.stringify({ username: username })
//     });
//
//     if (response.ok) {
//         const data = await response.json();
//         return data;
//     } else {
//         throw new Error('There is no such username in the system');
//     }
// }
