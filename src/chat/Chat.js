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
import io from "socket.io-client";



/* This is where the logic for the personalized Chats page is implemented. When a user logs in, their display name and
* profile picture are displayed in the top left bar. This bar also contains icons for adding a friend and logging out.
* Below the bar is a search box for finding a specific chat with a friend. All the user's friends and their chats are
* displayed below the search bar, including their display name, profile pictures, last message sent, and its date.
* By clicking on a chat, the friend's display name and profile picture are displayed on the top right bar. Below this
* bar is the chats window where the user can see the ongoing conversation. A text box is located beneath the window for
* the user to type a message and send it using the button on the right. */
function Chat({userData}) {
    const [currentFriend, setCurrentFriend] = useState(null);
    const socket = io('/'); // Connect to the host that serves the page
    // Update the user's friend list based on the friends they add.
    const [contactsList, setContactsList] = useState([]);
    // Create array that will hold all the chats between the user and his contacts.
    const [chatHistory, setChatHistory] = useState([]);
    // Will hold the user list that contain in the user search.
    const [searchResults, setSearchResults] = useState([]);
    // This boolean will be responsible to activate FriendListRequest each time a user delete a chat.
    const [refreshNeeded, setRefreshNeeded] = useState(false);
    const [refreshChat, setRefreshChat] = useState(false);

    const { contacts, loading} = FriendListRequest(refreshNeeded);

    // Fetch friends
    useEffect(() => {
        if (!loading) {
            setSearchResults(contacts);
            setContactsList(contacts);
        }
    }, [loading, contacts]);

    // Search for a friend is case-insensitive and filters the displayed list of friends based on the prefix entered
    // in the search box.
    const doSearch = function (q) {
        setSearchResults(contactsList.filter((contact) => contact.user.displayName.toLowerCase().startsWith(q.toLowerCase())));
    }

    useEffect(() => {
        console.log("Establishing socket connection...");
        socket.on("newMessage", async (newMessage) => {
            console.log("Received newMessage event from server: ", newMessage);
            if (!currentFriend) {
                await setRefreshNeeded(prevState => !prevState);
                // Force a re-render of FriendListResults by updating contactsList with a new reference
                setContactsList(prevContactsList => [...prevContactsList]);
                console.log("currentFriend object is null or undefined");
                return;
            }
            try {
                console.log("Fetching messages for currentFriend id: ", currentFriend.id);
                const messages = await ChatMessagesRequest(currentFriend.id);
                messages.reverse();
                setChatHistory(prevChatHistory => ({
                    ...prevChatHistory,
                    [currentFriend.id]: messages
                }));
                await setRefreshNeeded(prevState => !prevState);
                // Force a re-render of FriendListResults by updating contactsList with a new reference
                setContactsList(prevContactsList => [...prevContactsList]);
                // Update the last message for other friends
                console.log("saved message in the client is: ", newMessage.message.content)
            } catch (error) {
                console.error('Failed to fetch messages:', error);
            }
        });

        return () => {
            socket.off("newMessage");
        };
    }, [socket]);

    // This method is nessery when we first click on a friend in the chat list and we need to
    // represent all of his messages in the chat.
    useEffect(() => {
        console.log("We here refresh just when current friend is changing.");
        if (!currentFriend) {
            console.log("currentFriend object is null or undefined");
            return;
        }
        console.log("Fetching messages for currentFriend id: ", currentFriend.id);

        const fetch = async() => {
            try {
                const messages = await ChatMessagesRequest(currentFriend.id);
                messages.reverse();
                setChatHistory(prevChatHistory => ({
                    ...prevChatHistory,
                    [currentFriend.id]: messages
                }));
            } catch (error) {
                console.error("Failed to fetch messages:", error);
            }
        }
        fetch();
    }, [currentFriend]);

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
                    <ProfileFriend currentFriend={currentFriend} contactsList={contactsList} setRefreshNeeded={setRefreshNeeded} setCurrentFriend={setCurrentFriend}/>
                    <ChatWindow currentFriend={currentFriend} chatHistory={chatHistory}/>
                    <MessageBox currentFriend={currentFriend}  setRefreshNeeded={setRefreshNeeded}/>
                </div>
            </div>
        </div>
    );
}

export default Chat;
