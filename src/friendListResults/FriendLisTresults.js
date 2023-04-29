import FriendProperties from '../FriendProperties/FriendProperties';


function FriendListResults({friends}) {

    const friendsList = friends.map((friend, key) => {
        return <FriendProperties img={friend.img} name={friend.name} day_time={friend.day_time} last_msg={friend.last_msg} num_msg={friend.num_msg} key={key}></FriendProperties>
      })

    return (
        <ul className="chat_list">
            {/* Define FRIENDs! */}
            {friendsList}
        </ul>
    )
}

export default FriendListResults;