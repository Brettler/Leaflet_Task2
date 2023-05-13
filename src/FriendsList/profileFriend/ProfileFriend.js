/* If the user has not clicked on a friend chat yet, the top right bar will remain blank. Otherwise, it will display
* the details of the friend such as their display name and profile picture.  */
function ProfileFriend({currentFriend, userInfo}) {
    const friendInfo = userInfo.friendsList.find(friend => friend.registerUsername === currentFriend);

    // No friend has been selected yet.
    if (!friendInfo) {
        return (
            <div className="header">
                <div className="user_image"></div>
                <div className="user_name"></div>
            </div>
        );
    }

    // Display the details of the selected friend.
    return (
        <div className="header">
            <div className="user_image">
                <img src={friendInfo.registerImage} className="cover" alt=""/>
            </div>
            <div className="user_name">
                {friendInfo.registerDisplayName}<br/>
                <span>online</span>
            </div>
        </div>
    );
}

export default ProfileFriend;