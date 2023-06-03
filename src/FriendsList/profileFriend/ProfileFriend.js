/* If the user has not clicked on a friend chat yet, the top right bar will remain blank. Otherwise, it will display
* the details of the friend such as their display name and profile picture.  */
function ProfileFriend({currentFriend, contactsList}) {
    // contactsList is an array of objects, each representing a conversation.
    const friendInfo = contactsList.find(friend => friend.id === currentFriend);

    // No friend has been selected yet.
    if (!friendInfo) {
        return (
            <div className="header">
                <div className="user_image">
                    <img src="/fall.JPG" className="cover" alt=""/>
                </div>
                <div className="user_name">Welcome! To get started, add friends to chat with by clicking on the 'Add Friend' icon.</div>
            </div>
        );
    }

    // Display the details of the selected friend.
    return (
        <div className="header">
            <div className="user_image">
                <img src={friendInfo.user.profilePic} className="cover" alt=""/>
            </div>
            <div className="user_name">
                {friendInfo.user.displayName}<br/>
                <span>online</span>
            </div>
        </div>
    );
}

export default ProfileFriend;