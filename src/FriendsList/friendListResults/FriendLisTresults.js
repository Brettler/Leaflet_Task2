import FriendProperties from '../FriendProperties/FriendProperties';


function FriendListResults({userInfo, friends, setCurrentFriend}) {

    const friendsList = friends.map((friend, key) => {
        return <FriendProperties friend={friend}
                                 //num_msg={friend.num_msg}
                                 userInfo={userInfo}
                                 setCurrentFriend={setCurrentFriend}
                                 key={key}/>
      })

    return (
        <ul className="chat_list">
            {/* Define FRIENDs! */}
            {friendsList}
        </ul>
    )
}

export default FriendListResults;