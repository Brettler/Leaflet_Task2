import SearchFriend from '../SearchFriend/SearchFriend';
import {useState, useEffect} from 'react';
import FriendListResults from '../FriendsList/friendListResults/FriendLisTresults';
import ProfileUser from '../profileUser/ProfileUser';
import './chat.css';
import ProfileFriend from '../FriendsList/profileFriend/ProfileFriend';
import ChatWindow from '../chatWindow/ChatWindow';
import MessageBox from '../messageBox/MessageBox';
import FriendListRequest from "../API/FriendListRequest";
import ChatMessagesRequest from '../API/ChatMessagesRequest'
/* This is where the logic for the personalized Chats page is implemented. When a user logs in, their display name and
* profile picture are displayed in the top left bar. This bar also contains icons for adding a friend and logging out.
* Below the bar is a search box for finding a specific chat with a friend. All the user's friends and their chats are
* displayed below the search bar, including their display name, profile pictures, last message sent, and its date.
* By clicking on a chat, the friend's display name and profile picture are displayed on the top right bar. Below this
* bar is the chats window where the user can see the ongoing conversation. A text box is located beneath the window for
* the user to type a message and send it using the button on the right. */
function Chat({userData}) {
    const [currentFriend, setCurrentFriend] = useState(null);

    // Fetch friend data from server when the component mounts
    // useEffect(() => {
    //     const token = localStorage.getItem("token"); // storing the JWT token in local storage
    //     if (token) {
    //         FriendListRequest.then(data => {
    //             // Transform the server response to fit the current system
    //             const AdapterFriendsInformation = data.map(friend => ({
    //                 registerUsername: friend.user.username,
    //                 registerDisplayName: friend.user.displayName,
    //                 registerImage: friend.user.profilePic,
    //                 last_msg: friend.lastMessage.content,
    //                 day_time: new Date(friend.lastMessage.created).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    //             }));
    //             setContactList(AdapterFriendsInformation);
    //         });
    //     }
    // }, []);


    // Update the user's friend list based on the friends they add.
    const [contactsList, setContactsList] = useState([]);
    // Create array that will hold all the chats between the user and his contacts.
    const [chatHistory, setChatHistory] = useState([]);
    // Will hold the user list that contain in the user search.
    const [searchResults, setSearchResults] = useState([]);

    const { contacts, loading} = FriendListRequest();

    // const [originalContactsList, setOriginalContactsList] = useState([]);


    // Fetch friends
    useEffect(() => {
        if (!loading) {
            setSearchResults(contacts);
            setContactsList(contacts);
            // setOriginalContactsList(contacts); // Initialize the original contacts list

        }
    }, [loading, contacts]);

    // Search for a friend is case-insensitive and filters the displayed list of friends based on the prefix entered
    // in the search box.
    const doSearch = function (q) {
        setSearchResults(contactsList.filter((contact) => contact.user.displayName.toLowerCase().startsWith(q.toLowerCase())));
    }

    useEffect(() => {
        if (currentFriend) {
            ChatMessagesRequest(currentFriend.id)
                .then(messages => {
                    messages.reverse(); // reverse the array
                    setChatHistory(prevChatHistory => ({
                        ...prevChatHistory,
                        [currentFriend.id]: messages
                    }));
                })
                .catch(error => console.error('Failed to fetch messages:', error));
        }
        console.log("")
    }, [currentFriend]);





    // Handles the functionality of sending messages in a chat. It displays the text of the message and the time it
    // was sent. Additionally, it manages the chat history so that messages are displayed in chronological order.
    const handleNewMessage = (newMessage) => {
        setChatHistory(prevChatHistory => {
            const chatMessages = prevChatHistory[currentFriend.id] || [];
            return {
                ...prevChatHistory,
                [currentFriend.id]: [...chatMessages, newMessage]
            };
        });

    };

    // Chat page structure.
    return (
        <div id='chat' className='chatPage'>
            <div className="container col-12">
                <div className="left_side">
                    <ProfileUser userData={userData}
                                 setContactsList={setContactsList}/>
                    <SearchFriend doSearch={doSearch}/>
                    <FriendListResults contactsList={contactsList}
                                       setCurrentFriend={setCurrentFriend}/>
                </div>

                {/* Define The chat window - right side of the program */}
                <div className="right_side">
                    <ProfileFriend currentFriend={currentFriend} contactsList={contactsList}/>
                    <ChatWindow currentFriend={currentFriend} chatHistory={chatHistory}/>
                    <MessageBox currentFriend={currentFriend} handleNewMessage={handleNewMessage}/>
                </div>
            </div>
        </div>
    );
}

export default Chat;
