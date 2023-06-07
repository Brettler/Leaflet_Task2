/* If the user has not clicked on a friend chat yet, the top right bar will remain blank. Otherwise, it will display
* the details of the friend such as their display name and profile picture.  */
function ProfileFriend({currentFriend, contactsList}) {

    // No friend has been selected yet.
    if (!currentFriend) {
        return (
            <div className="header">
                <div className="user_image">
                    <img src="/fall.JPG" className="cover" alt=""/>
                </div>
                <div className="user_name">Welcome! To get started, add friends to chat with by clicking on the 'Add Friend' icon.</div>
            </div>
        );
    }

    // contactsList is an array of objects, each representing a conversation.
    const friendInfo = contactsList.find(friend => friend.id === currentFriend.id);



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

            <ul className="icons">
                <i className="bi bi-trash2 delete_chat_icon" data-toggle="tooltip" data-placement="bottom"
                   title="Delete Chat"/>
            </ul>

        </div>
    );
}

export default ProfileFriend;