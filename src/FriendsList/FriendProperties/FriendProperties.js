/* This function populates the list of friends on the left-hand side of the screen. It displays each friend's
* properties, including their display name, profile picture, and the time and content of the last message sent. */
function FriendProperties({friend, userInfo, setCurrentFriend}) {

    // Extracting and formatting friend properties.
    const handleClick = () => {
        setCurrentFriend(friend.registerUsername);
    };
    const friendInfo = userInfo.friendsInfo[friend.registerUsername];
    // Shorten the display of the last message to fit in the 'friend block'.
    const lastMessage = friendInfo.last_msg.length > 32 ? friendInfo.last_msg.slice(0, 32) + "..." : friendInfo.last_msg;

    // The individual friend chats structure.
    return (
        <li className="friend_block" onClick={handleClick}>
            <div className="img_friend">
                <img src={friend.registerImage} className="cover" alt=""/>
            </div>
            <div className="details">
                <div className="friend_name">
                    {friend.registerDisplayName}
                    <p className="time_date">
                        {friendInfo.day_time}
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