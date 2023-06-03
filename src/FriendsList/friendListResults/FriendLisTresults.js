import FriendProperties from '../FriendProperties/FriendProperties';

/* The list of friends for the current user along with their properties, to be displayed in the friends list with
* their corresponding chats. */
function FriendListResults({contactsList, setCurrentFriend}) {

    // The friends and their properties.
    const friendsList = contactsList.map((friend, key) => {
        return <FriendProperties friend={friend}
                                 setCurrentFriend={setCurrentFriend}
                                 key={key}/>
    })

    // The list of friend chats.
    return (
        <ul className="chat_list">{friendsList}</ul>
    );
}

export default FriendListResults;