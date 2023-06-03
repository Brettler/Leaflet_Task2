/* This function populates the list of friends on the left-hand side of the screen. It displays each friend's
* properties, including their display name, profile picture, and the time and content of the last message sent. */
function FriendProperties({friend, setCurrentFriend}) {

    // Extracting and formatting friend properties.
    const handleClick = () => {
        setCurrentFriend(friend.id);
    };
    // const friendInfo = userInfo.friendsInfo[friend.registerUsername];
    // Shorten the display of the last message to fit in the 'friend block'.
    const lastMessage = friend.lastMessage ? (friend.lastMessage.length > 32 ? friend.lastMessage.slice(0, 32) + "..." : friend.lastMessage) : "";
    const lastMessageTime = friend.lastMessage ? friend.lastMessage.timestamp : ""; // assuming timestamp is in the required format

    // The individual friend chats structure.
    return (
        <li className="friend_block" onClick={handleClick}>
            <div className="img_friend">
                <img src={friend.user.profilePic} className="cover" alt=""/>
            </div>
            <div className="details">
                <div className="friend_name">
                    {friend.user.displayName}
                    <p className="time_date">
                        {lastMessageTime}

                    </p>
                </div>
                <div className="last_message">
                    <p>
                        {lastMessage}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default FriendProperties;