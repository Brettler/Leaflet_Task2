/* This function populates the list of friends on the left-hand side of the screen. It displays each friend's
* properties, including their display name, profile picture, and the time and content of the last message sent. */
function FriendProperties({friend, setCurrentFriend, hasUnreadMessage}) {

    // Extracting and formatting friend properties.
    const handleClick = () => {
        setCurrentFriend(friend);
    };
    // const friendInfo = userInfo.friendsInfo[friend.registerUsername];
    // Shorten the display of the last message to fit in the 'friend block'.
    const lastMessage = friend.lastMessage
        ? (friend.lastMessage.content.length > 15
            ? friend.lastMessage.content.slice(0, 15) + "..."
            : friend.lastMessage.content)
        : "";
    const lastMessageTime = friend.lastMessage
        ? new Date(friend.lastMessage.created).toLocaleDateString([], {year: 'numeric', month: '2-digit', day: '2-digit'})
        + ' '
        + new Date(friend.lastMessage.created).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        : "";
    // The individual friend chats structure.
    return (
        // We will change the color back from red to black when a user click on the contact that sent him a message.
        <li className={`friend_block ${hasUnreadMessage ? 'unread' : ''}`} onClick={handleClick}>
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