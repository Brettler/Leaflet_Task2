import FriendProperties from '../FriendProperties/FriendProperties';

/* The list of friends for the current user along with their properties, to be displayed in the friends list with
* their corresponding chats. */
function FriendListResults({userInfo, friends, setCurrentFriend}) {

    // The friends and their properties.
    const friendsList = friends.map((friend, key) => {
        return <FriendProperties friend={friend}
                                 userInfo={userInfo}
                                 setCurrentFriend={setCurrentFriend}
                                 key={key}/>
    })

    // The list of friend chats.
    return (
        <ul className="chat_list">{friendsList}</ul>
    );
}

export default FriendListResults;