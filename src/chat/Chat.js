import SearchFriend from '../SearchFriend/SearchFriend';
import {useState, useEffect} from 'react';
import FriendListResults from '../FriendsList/friendListResults/FriendLisTresults';
import ProfileUser from '../profileUser/ProfileUser';
import './chat.css';
import ProfileFriend from '../FriendsList/profileFriend/ProfileFriend';
import ChatWindow from '../chatWindow/ChatWindow';
import MessageBox from '../messageBox/MessageBox';

/* This is where the logic for the personalized Chats page is implemented. When a user logs in, their display name and
* profile picture are displayed in the top left bar. This bar also contains icons for adding a friend and logging out.
* Below the bar is a search box for finding a specific chat with a friend. All the user's friends and their chats are
* displayed below the search bar, including their display name, profile pictures, last message sent, and its date.
* By clicking on a chat, the friend's display name and profile picture are displayed on the top right bar. Below this
* bar is the chats window where the user can see the ongoing conversation. A text box is located beneath the window for
* the user to type a message and send it using the button on the right. */
function Chat({userInfo, usersRegisterList, setUsersRegisterList}) {
    const [currentFriend, setCurrentFriend] = useState(null);
    // Update the user's friend list based on the friends they add.
    const [friendList, setFriendList] = useState(userInfo.friendsList);
    useEffect(() => {
        setFriendList(userInfo.friendsList);
    }, [userInfo]);

    // Search for a friend is case-insensitive and filters the displayed list of friends based on the prefix entered
    // in the search box.
    const doSearch = function (q) {
        setFriendList(userInfo.friendsList.filter((friend) => friend.registerDisplayName.toLowerCase().startsWith(q.toLowerCase())));
    }

    // Handles the functionality of sending messages in a chat. It displays the text of the message and the time it
    // was sent. Additionally, it manages the chat history so that messages are displayed in chronological order.
    const handleNewMessage = (newMessage) => {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const updatedUser = {
            ...userInfo,
            chatHistory: {
                ...userInfo.chatHistory,
                [currentFriend]: [...userInfo.chatHistory[currentFriend] || [], newMessage]
            },
            friendsInfo: {
                ...userInfo.friendsInfo,
                [currentFriend]: {
                    ...userInfo.friendsInfo[currentFriend],
                    last_msg: newMessage.text,
                    day_time: timeString
                }
            }
        };

        // Updates the user's information, including their friend list and chat history with each friend.
        setUsersRegisterList(prevUsers => {
            return {...prevUsers, [userInfo.registerUsername]: updatedUser};
        });
    };

    // Chat page structure.
    return (
        <div id='chat' className='chatPage'>
            <div className="container col-12">
                <div className="left_side">
                    <ProfileUser userInfo={userInfo} usersRegisterList={usersRegisterList}
                                 setUsersRegisterList={setUsersRegisterList}/>
                    <SearchFriend doSearch={doSearch}/>
                    <FriendListResults userInfo={userInfo}
                                       friends={friendList}
                                       setCurrentFriend={setCurrentFriend}/>
                </div>

                {/* Define The chat window - right side of the program */}
                <div className="right_side">
                    <ProfileFriend currentFriend={currentFriend} userInfo={userInfo}/>
                    <ChatWindow currentFriend={currentFriend} userInfo={userInfo}/>
                    <MessageBox userInfo={userInfo} currentFriend={currentFriend} handleNewMessage={handleNewMessage}/>
                </div>
            </div>
        </div>
    );
}

export default Chat;
