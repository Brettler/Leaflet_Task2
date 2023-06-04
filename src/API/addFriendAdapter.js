// function addFriendAdapter(serverData) {
//     // Assume the first user in the array is the one you want
//     const user = serverData.users[0];
//     const messages = serverData.messages;
//
//     // Convert to the format expected by AddFriend component
//     const friendUser = {
//         registerUsername: user.username,
//         displayName: user.displayName,
//         profilePic: user.profilePic,
//         id: serverData.id,
//         messages: messages.map(message => ({
//             id: message.id,
//             created: message.created,
//             sender: {
//                 username: message.sender.username,
//                 displayName: message.sender.displayName,
//                 profilePic: message.sender.profilePic
//             },
//             content: message.content
//         }))
//     };
//
//     return friendUser;
// }
//
// export default addFriendAdapter;